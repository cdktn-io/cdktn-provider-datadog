# `githubOidcIdentityMapping` Submodule <a name="`githubOidcIdentityMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIdentityMapping <a name="GithubOidcIdentityMapping" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping datadog_github_oidc_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIdentityMapping(Construct Scope, string Id, GithubOidcIdentityMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig">GithubOidcIdentityMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig">GithubOidcIdentityMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers">PutClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers">ResetClaimMatchers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClaimMatchers` <a name="PutClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers"></a>

```csharp
private void PutClaimMatchers(GithubOidcIdentityMappingClaimMatchers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `ResetClaimMatchers` <a name="ResetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers"></a>

```csharp
private void ResetClaimMatchers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIdentityMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIdentityMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIdentityMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GithubOidcIdentityMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GithubOidcIdentityMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GithubOidcIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid">AccountUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput">ClaimMatchersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountUuid`<sup>Required</sup> <a name="AccountUuid" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid"></a>

```csharp
public string AccountUuid { get; }
```

- *Type:* string

---

##### `ClaimMatchers`<sup>Required</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers"></a>

```csharp
public GithubOidcIdentityMappingClaimMatchersOutputReference ClaimMatchers { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput"></a>

```csharp
public string AccountIdentifierInput { get; }
```

- *Type:* string

---

##### `ClaimMatchersInput`<sup>Optional</sup> <a name="ClaimMatchersInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput"></a>

```csharp
public IResolvable|GithubOidcIdentityMappingClaimMatchers ClaimMatchersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIdentityMappingClaimMatchers <a name="GithubOidcIdentityMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIdentityMappingClaimMatchers {
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
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub">Sub</a></code> | <code>string</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor">Actor</a></code> | <code>string</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId">ActorId</a></code> | <code>string</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise">Enterprise</a></code> | <code>string</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId">EnterpriseId</a></code> | <code>string</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment">Environment</a></code> | <code>string</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName">EventName</a></code> | <code>string</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>string</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref">Ref</a></code> | <code>string</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType">RefType</a></code> | <code>string</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository">Repository</a></code> | <code>string</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner">RepositoryOwner</a></code> | <code>string</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>string</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>string</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>string</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow">Workflow</a></code> | <code>string</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef">WorkflowRef</a></code> | <code>string</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub"></a>

```csharp
public string Sub { get; set; }
```

- *Type:* string

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#sub GithubOidcIdentityMapping#sub}

---

##### `Actor`<sup>Optional</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor"></a>

```csharp
public string Actor { get; set; }
```

- *Type:* string

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor GithubOidcIdentityMapping#actor}

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId"></a>

```csharp
public string ActorId { get; set; }
```

- *Type:* string

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor_id GithubOidcIdentityMapping#actor_id}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise"></a>

```csharp
public string Enterprise { get; set; }
```

- *Type:* string

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise GithubOidcIdentityMapping#enterprise}

---

##### `EnterpriseId`<sup>Optional</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId"></a>

```csharp
public string EnterpriseId { get; set; }
```

- *Type:* string

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise_id GithubOidcIdentityMapping#enterprise_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#environment GithubOidcIdentityMapping#environment}

---

##### `EventName`<sup>Optional</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName"></a>

```csharp
public string EventName { get; set; }
```

- *Type:* string

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#event_name GithubOidcIdentityMapping#event_name}

---

##### `JobWorkflowRef`<sup>Optional</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef"></a>

```csharp
public string JobWorkflowRef { get; set; }
```

- *Type:* string

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#job_workflow_ref GithubOidcIdentityMapping#job_workflow_ref}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref GithubOidcIdentityMapping#ref}

---

##### `RefType`<sup>Optional</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType"></a>

```csharp
public string RefType { get; set; }
```

- *Type:* string

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref_type GithubOidcIdentityMapping#ref_type}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository GithubOidcIdentityMapping#repository}

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_id GithubOidcIdentityMapping#repository_id}

---

##### `RepositoryOwner`<sup>Optional</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner"></a>

```csharp
public string RepositoryOwner { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner GithubOidcIdentityMapping#repository_owner}

---

##### `RepositoryOwnerId`<sup>Optional</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId"></a>

```csharp
public string RepositoryOwnerId { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner_id GithubOidcIdentityMapping#repository_owner_id}

---

##### `RepositoryVisibility`<sup>Optional</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility"></a>

```csharp
public string RepositoryVisibility { get; set; }
```

- *Type:* string

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_visibility GithubOidcIdentityMapping#repository_visibility}

---

##### `RunnerEnvironment`<sup>Optional</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment"></a>

```csharp
public string RunnerEnvironment { get; set; }
```

- *Type:* string

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#runner_environment GithubOidcIdentityMapping#runner_environment}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow"></a>

```csharp
public string Workflow { get; set; }
```

- *Type:* string

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow GithubOidcIdentityMapping#workflow}

---

##### `WorkflowRef`<sup>Optional</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef"></a>

```csharp
public string WorkflowRef { get; set; }
```

- *Type:* string

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow_ref GithubOidcIdentityMapping#workflow_ref}

---

### GithubOidcIdentityMappingConfig <a name="GithubOidcIdentityMappingConfig" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIdentityMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountIdentifier,
    GithubOidcIdentityMappingClaimMatchers ClaimMatchers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; set; }
```

- *Type:* string

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `ClaimMatchers`<sup>Optional</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers"></a>

```csharp
public GithubOidcIdentityMappingClaimMatchers ClaimMatchers { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIdentityMappingClaimMatchersOutputReference <a name="GithubOidcIdentityMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GithubOidcIdentityMappingClaimMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor">ResetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId">ResetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName">ResetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef">ResetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType">ResetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner">ResetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId">ResetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility">ResetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment">ResetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef">ResetWorkflowRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActor` <a name="ResetActor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor"></a>

```csharp
private void ResetActor()
```

##### `ResetActorId` <a name="ResetActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId"></a>

```csharp
private void ResetActorId()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise"></a>

```csharp
private void ResetEnterprise()
```

##### `ResetEnterpriseId` <a name="ResetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```csharp
private void ResetEnterpriseId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEventName` <a name="ResetEventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName"></a>

```csharp
private void ResetEventName()
```

##### `ResetJobWorkflowRef` <a name="ResetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```csharp
private void ResetJobWorkflowRef()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```

##### `ResetRefType` <a name="ResetRefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType"></a>

```csharp
private void ResetRefType()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```csharp
private void ResetRepositoryId()
```

##### `ResetRepositoryOwner` <a name="ResetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```csharp
private void ResetRepositoryOwner()
```

##### `ResetRepositoryOwnerId` <a name="ResetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```csharp
private void ResetRepositoryOwnerId()
```

##### `ResetRepositoryVisibility` <a name="ResetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```csharp
private void ResetRepositoryVisibility()
```

##### `ResetRunnerEnvironment` <a name="ResetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```csharp
private void ResetRunnerEnvironment()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```

##### `ResetWorkflowRef` <a name="ResetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```csharp
private void ResetWorkflowRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput">ActorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput">EnterpriseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput">EventNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">JobWorkflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput">RefTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">RepositoryOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput">RepositoryOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">RepositoryVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">RunnerEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput">SubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput">WorkflowRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor">Actor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId">ActorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise">Enterprise</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId">EnterpriseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName">EventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType">RefType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner">RepositoryOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub">Sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow">Workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef">WorkflowRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```csharp
public string ActorIdInput { get; }
```

- *Type:* string

---

##### `ActorInput`<sup>Optional</sup> <a name="ActorInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput"></a>

```csharp
public string ActorInput { get; }
```

- *Type:* string

---

##### `EnterpriseIdInput`<sup>Optional</sup> <a name="EnterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```csharp
public string EnterpriseIdInput { get; }
```

- *Type:* string

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```csharp
public string EnterpriseInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `EventNameInput`<sup>Optional</sup> <a name="EventNameInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```csharp
public string EventNameInput { get; }
```

- *Type:* string

---

##### `JobWorkflowRefInput`<sup>Optional</sup> <a name="JobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```csharp
public string JobWorkflowRefInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RefTypeInput`<sup>Optional</sup> <a name="RefTypeInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```csharp
public string RefTypeInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RepositoryOwnerIdInput`<sup>Optional</sup> <a name="RepositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```csharp
public string RepositoryOwnerIdInput { get; }
```

- *Type:* string

---

##### `RepositoryOwnerInput`<sup>Optional</sup> <a name="RepositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```csharp
public string RepositoryOwnerInput { get; }
```

- *Type:* string

---

##### `RepositoryVisibilityInput`<sup>Optional</sup> <a name="RepositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```csharp
public string RepositoryVisibilityInput { get; }
```

- *Type:* string

---

##### `RunnerEnvironmentInput`<sup>Optional</sup> <a name="RunnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```csharp
public string RunnerEnvironmentInput { get; }
```

- *Type:* string

---

##### `SubInput`<sup>Optional</sup> <a name="SubInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput"></a>

```csharp
public string SubInput { get; }
```

- *Type:* string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput"></a>

```csharp
public string WorkflowInput { get; }
```

- *Type:* string

---

##### `WorkflowRefInput`<sup>Optional</sup> <a name="WorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```csharp
public string WorkflowRefInput { get; }
```

- *Type:* string

---

##### `Actor`<sup>Required</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor"></a>

```csharp
public string Actor { get; }
```

- *Type:* string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId"></a>

```csharp
public string ActorId { get; }
```

- *Type:* string

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise"></a>

```csharp
public string Enterprise { get; }
```

- *Type:* string

---

##### `EnterpriseId`<sup>Required</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```csharp
public string EnterpriseId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName"></a>

```csharp
public string EventName { get; }
```

- *Type:* string

---

##### `JobWorkflowRef`<sup>Required</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```csharp
public string JobWorkflowRef { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `RefType`<sup>Required</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType"></a>

```csharp
public string RefType { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RepositoryOwner`<sup>Required</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```csharp
public string RepositoryOwner { get; }
```

- *Type:* string

---

##### `RepositoryOwnerId`<sup>Required</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```csharp
public string RepositoryOwnerId { get; }
```

- *Type:* string

---

##### `RepositoryVisibility`<sup>Required</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```csharp
public string RepositoryVisibility { get; }
```

- *Type:* string

---

##### `RunnerEnvironment`<sup>Required</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```csharp
public string RunnerEnvironment { get; }
```

- *Type:* string

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub"></a>

```csharp
public string Sub { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow"></a>

```csharp
public string Workflow { get; }
```

- *Type:* string

---

##### `WorkflowRef`<sup>Required</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef"></a>

```csharp
public string WorkflowRef { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GithubOidcIdentityMappingClaimMatchers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---



