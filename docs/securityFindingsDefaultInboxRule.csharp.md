# `securityFindingsDefaultInboxRule` Submodule <a name="`securityFindingsDefaultInboxRule` Submodule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDefaultInboxRule <a name="SecurityFindingsDefaultInboxRule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_default_inbox_rule datadog_security_findings_default_inbox_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDefaultInboxRule(Construct Scope, string Id, SecurityFindingsDefaultInboxRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig">SecurityFindingsDefaultInboxRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig">SecurityFindingsDefaultInboxRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsDefaultInboxRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDefaultInboxRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDefaultInboxRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDefaultInboxRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDefaultInboxRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityFindingsDefaultInboxRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsDefaultInboxRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsDefaultInboxRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_default_inbox_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDefaultInboxRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference">SecurityFindingsDefaultInboxRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference">SecurityFindingsDefaultInboxRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.action"></a>

```csharp
public SecurityFindingsDefaultInboxRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference">SecurityFindingsDefaultInboxRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.rule"></a>

```csharp
public SecurityFindingsDefaultInboxRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference">SecurityFindingsDefaultInboxRuleRuleOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDefaultInboxRuleAction <a name="SecurityFindingsDefaultInboxRuleAction" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDefaultInboxRuleAction {

};
```


### SecurityFindingsDefaultInboxRuleConfig <a name="SecurityFindingsDefaultInboxRuleConfig" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDefaultInboxRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the default inbox rule is enabled for the organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the default inbox rule is enabled for the organization.

When not set, the rule's current server-side value is adopted; declare it to manage the value. Default inbox rules are enabled unless disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_default_inbox_rule#enabled SecurityFindingsDefaultInboxRule#enabled}

---

### SecurityFindingsDefaultInboxRuleRule <a name="SecurityFindingsDefaultInboxRuleRule" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDefaultInboxRuleRule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsDefaultInboxRuleActionOutputReference <a name="SecurityFindingsDefaultInboxRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDefaultInboxRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction">SecurityFindingsDefaultInboxRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleActionOutputReference.property.internalValue"></a>

```csharp
public SecurityFindingsDefaultInboxRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleAction">SecurityFindingsDefaultInboxRuleAction</a>

---


### SecurityFindingsDefaultInboxRuleRuleOutputReference <a name="SecurityFindingsDefaultInboxRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDefaultInboxRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule">SecurityFindingsDefaultInboxRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; }
```

- *Type:* string[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRuleOutputReference.property.internalValue"></a>

```csharp
public SecurityFindingsDefaultInboxRuleRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDefaultInboxRule.SecurityFindingsDefaultInboxRuleRule">SecurityFindingsDefaultInboxRuleRule</a>

---



