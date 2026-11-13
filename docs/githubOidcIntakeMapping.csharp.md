# `githubOidcIntakeMapping` Submodule <a name="`githubOidcIntakeMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIntakeMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIntakeMapping <a name="GithubOidcIntakeMapping" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping datadog_github_oidc_intake_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIntakeMapping(Construct Scope, string Id, GithubOidcIntakeMappingConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig">GithubOidcIntakeMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig">GithubOidcIntakeMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers">PutClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetClaimMatchers">ResetClaimMatchers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClaimMatchers` <a name="PutClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers"></a>

```csharp
private void PutClaimMatchers(GithubOidcIntakeMappingClaimMatchers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---

##### `ResetClaimMatchers` <a name="ResetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetClaimMatchers"></a>

```csharp
private void ResetClaimMatchers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIntakeMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIntakeMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIntakeMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIntakeMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubOidcIntakeMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubOidcIntakeMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIntakeMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference">GithubOidcIntakeMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchersInput">ClaimMatchersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClaimMatchers`<sup>Required</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchers"></a>

```csharp
public GithubOidcIntakeMappingClaimMatchersOutputReference ClaimMatchers { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference">GithubOidcIntakeMappingClaimMatchersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ClaimMatchersInput`<sup>Optional</sup> <a name="ClaimMatchersInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchersInput"></a>

```csharp
public IResolvable|GithubOidcIntakeMappingClaimMatchers ClaimMatchersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIntakeMappingClaimMatchers <a name="GithubOidcIntakeMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIntakeMappingClaimMatchers {
    string Sub,
    string Actor = null,
    string ActorId = null,
    string Enterprise = null,
    string EnterpriseId = null,
    string Environment = null,
    string EventName = null,
    string JobWorkflowRef = null,
    string Ref = null,
    string RefType = null,
    string Repository = null,
    string RepositoryId = null,
    string RepositoryOwner = null,
    string RepositoryOwnerId = null,
    string RepositoryVisibility = null,
    string RunnerEnvironment = null,
    string Workflow = null,
    string WorkflowRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.sub">Sub</a></code> | <code>string</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actor">Actor</a></code> | <code>string</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actorId">ActorId</a></code> | <code>string</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterprise">Enterprise</a></code> | <code>string</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterpriseId">EnterpriseId</a></code> | <code>string</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.environment">Environment</a></code> | <code>string</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.eventName">EventName</a></code> | <code>string</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>string</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.ref">Ref</a></code> | <code>string</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.refType">RefType</a></code> | <code>string</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repository">Repository</a></code> | <code>string</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwner">RepositoryOwner</a></code> | <code>string</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>string</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>string</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>string</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflow">Workflow</a></code> | <code>string</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflowRef">WorkflowRef</a></code> | <code>string</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.sub"></a>

```csharp
public string Sub { get; set; }
```

- *Type:* string

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#sub GithubOidcIntakeMapping#sub}

---

##### `Actor`<sup>Optional</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actor"></a>

```csharp
public string Actor { get; set; }
```

- *Type:* string

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor GithubOidcIntakeMapping#actor}

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actorId"></a>

```csharp
public string ActorId { get; set; }
```

- *Type:* string

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor_id GithubOidcIntakeMapping#actor_id}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterprise"></a>

```csharp
public string Enterprise { get; set; }
```

- *Type:* string

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise GithubOidcIntakeMapping#enterprise}

---

##### `EnterpriseId`<sup>Optional</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterpriseId"></a>

```csharp
public string EnterpriseId { get; set; }
```

- *Type:* string

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise_id GithubOidcIntakeMapping#enterprise_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#environment GithubOidcIntakeMapping#environment}

---

##### `EventName`<sup>Optional</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.eventName"></a>

```csharp
public string EventName { get; set; }
```

- *Type:* string

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#event_name GithubOidcIntakeMapping#event_name}

---

##### `JobWorkflowRef`<sup>Optional</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.jobWorkflowRef"></a>

```csharp
public string JobWorkflowRef { get; set; }
```

- *Type:* string

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#job_workflow_ref GithubOidcIntakeMapping#job_workflow_ref}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref GithubOidcIntakeMapping#ref}

---

##### `RefType`<sup>Optional</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.refType"></a>

```csharp
public string RefType { get; set; }
```

- *Type:* string

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref_type GithubOidcIntakeMapping#ref_type}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository GithubOidcIntakeMapping#repository}

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_id GithubOidcIntakeMapping#repository_id}

---

##### `RepositoryOwner`<sup>Optional</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwner"></a>

```csharp
public string RepositoryOwner { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner GithubOidcIntakeMapping#repository_owner}

---

##### `RepositoryOwnerId`<sup>Optional</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwnerId"></a>

```csharp
public string RepositoryOwnerId { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner_id GithubOidcIntakeMapping#repository_owner_id}

---

##### `RepositoryVisibility`<sup>Optional</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryVisibility"></a>

```csharp
public string RepositoryVisibility { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_visibility GithubOidcIntakeMapping#repository_visibility}

---

##### `RunnerEnvironment`<sup>Optional</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.runnerEnvironment"></a>

```csharp
public string RunnerEnvironment { get; set; }
```

- *Type:* string

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#runner_environment GithubOidcIntakeMapping#runner_environment}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflow"></a>

```csharp
public string Workflow { get; set; }
```

- *Type:* string

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow GithubOidcIntakeMapping#workflow}

---

##### `WorkflowRef`<sup>Optional</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflowRef"></a>

```csharp
public string WorkflowRef { get; set; }
```

- *Type:* string

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow_ref GithubOidcIntakeMapping#workflow_ref}

---

### GithubOidcIntakeMappingConfig <a name="GithubOidcIntakeMappingConfig" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIntakeMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GithubOidcIntakeMappingClaimMatchers ClaimMatchers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClaimMatchers`<sup>Optional</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.claimMatchers"></a>

```csharp
public GithubOidcIntakeMappingClaimMatchers ClaimMatchers { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#claim_matchers GithubOidcIntakeMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIntakeMappingClaimMatchersOutputReference <a name="GithubOidcIntakeMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIntakeMappingClaimMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActor">ResetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterpriseId">ResetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEventName">ResetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetJobWorkflowRef">ResetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRefType">ResetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwner">ResetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwnerId">ResetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryVisibility">ResetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRunnerEnvironment">ResetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflowRef">ResetWorkflowRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActor` <a name="ResetActor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActor"></a>

```csharp
private void ResetActor()
```

##### `ResetActorId` <a name="ResetActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActorId"></a>

```csharp
private void ResetActorId()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterprise"></a>

```csharp
private void ResetEnterprise()
```

##### `ResetEnterpriseId` <a name="ResetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```csharp
private void ResetEnterpriseId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEventName` <a name="ResetEventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEventName"></a>

```csharp
private void ResetEventName()
```

##### `ResetJobWorkflowRef` <a name="ResetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```csharp
private void ResetJobWorkflowRef()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```

##### `ResetRefType` <a name="ResetRefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRefType"></a>

```csharp
private void ResetRefType()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```csharp
private void ResetRepositoryId()
```

##### `ResetRepositoryOwner` <a name="ResetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```csharp
private void ResetRepositoryOwner()
```

##### `ResetRepositoryOwnerId` <a name="ResetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```csharp
private void ResetRepositoryOwnerId()
```

##### `ResetRepositoryVisibility` <a name="ResetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```csharp
private void ResetRepositoryVisibility()
```

##### `ResetRunnerEnvironment` <a name="ResetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```csharp
private void ResetRunnerEnvironment()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```

##### `ResetWorkflowRef` <a name="ResetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```csharp
private void ResetWorkflowRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorInput">ActorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseIdInput">EnterpriseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventNameInput">EventNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">JobWorkflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refTypeInput">RefTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">RepositoryOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerInput">RepositoryOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">RepositoryVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">RunnerEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.subInput">SubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRefInput">WorkflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actor">Actor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorId">ActorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterprise">Enterprise</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseId">EnterpriseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventName">EventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refType">RefType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwner">RepositoryOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.sub">Sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflow">Workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRef">WorkflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```csharp
public string ActorIdInput { get; }
```

- *Type:* string

---

##### `ActorInput`<sup>Optional</sup> <a name="ActorInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorInput"></a>

```csharp
public string ActorInput { get; }
```

- *Type:* string

---

##### `EnterpriseIdInput`<sup>Optional</sup> <a name="EnterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```csharp
public string EnterpriseIdInput { get; }
```

- *Type:* string

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```csharp
public string EnterpriseInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `EventNameInput`<sup>Optional</sup> <a name="EventNameInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```csharp
public string EventNameInput { get; }
```

- *Type:* string

---

##### `JobWorkflowRefInput`<sup>Optional</sup> <a name="JobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```csharp
public string JobWorkflowRefInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RefTypeInput`<sup>Optional</sup> <a name="RefTypeInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```csharp
public string RefTypeInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RepositoryOwnerIdInput`<sup>Optional</sup> <a name="RepositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```csharp
public string RepositoryOwnerIdInput { get; }
```

- *Type:* string

---

##### `RepositoryOwnerInput`<sup>Optional</sup> <a name="RepositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```csharp
public string RepositoryOwnerInput { get; }
```

- *Type:* string

---

##### `RepositoryVisibilityInput`<sup>Optional</sup> <a name="RepositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```csharp
public string RepositoryVisibilityInput { get; }
```

- *Type:* string

---

##### `RunnerEnvironmentInput`<sup>Optional</sup> <a name="RunnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```csharp
public string RunnerEnvironmentInput { get; }
```

- *Type:* string

---

##### `SubInput`<sup>Optional</sup> <a name="SubInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.subInput"></a>

```csharp
public string SubInput { get; }
```

- *Type:* string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowInput"></a>

```csharp
public string WorkflowInput { get; }
```

- *Type:* string

---

##### `WorkflowRefInput`<sup>Optional</sup> <a name="WorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```csharp
public string WorkflowRefInput { get; }
```

- *Type:* string

---

##### `Actor`<sup>Required</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actor"></a>

```csharp
public string Actor { get; }
```

- *Type:* string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorId"></a>

```csharp
public string ActorId { get; }
```

- *Type:* string

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterprise"></a>

```csharp
public string Enterprise { get; }
```

- *Type:* string

---

##### `EnterpriseId`<sup>Required</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```csharp
public string EnterpriseId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventName"></a>

```csharp
public string EventName { get; }
```

- *Type:* string

---

##### `JobWorkflowRef`<sup>Required</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```csharp
public string JobWorkflowRef { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `RefType`<sup>Required</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refType"></a>

```csharp
public string RefType { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RepositoryOwner`<sup>Required</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```csharp
public string RepositoryOwner { get; }
```

- *Type:* string

---

##### `RepositoryOwnerId`<sup>Required</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```csharp
public string RepositoryOwnerId { get; }
```

- *Type:* string

---

##### `RepositoryVisibility`<sup>Required</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```csharp
public string RepositoryVisibility { get; }
```

- *Type:* string

---

##### `RunnerEnvironment`<sup>Required</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```csharp
public string RunnerEnvironment { get; }
```

- *Type:* string

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.sub"></a>

```csharp
public string Sub { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflow"></a>

```csharp
public string Workflow { get; }
```

- *Type:* string

---

##### `WorkflowRef`<sup>Required</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRef"></a>

```csharp
public string WorkflowRef { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GithubOidcIntakeMappingClaimMatchers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---



