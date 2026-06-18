# `secureEmbedDashboard` Submodule <a name="`secureEmbedDashboard` Submodule" id="@cdktn/provider-datadog.secureEmbedDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureEmbedDashboard <a name="SecureEmbedDashboard" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecureEmbedDashboard(Construct Scope, string Id, SecureEmbedDashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig">SecureEmbedDashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig">SecureEmbedDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars">PutSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan">ResetGlobalTimeLiveSpan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable">ResetGlobalTimeSelectable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars">ResetSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity">ResetViewingPreferencesHighDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme">ResetViewingPreferencesTheme</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSelectableTemplateVars` <a name="PutSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars"></a>

```csharp
private void PutSelectableTemplateVars(IResolvable|SecureEmbedDashboardSelectableTemplateVars[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

---

##### `ResetGlobalTimeLiveSpan` <a name="ResetGlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan"></a>

```csharp
private void ResetGlobalTimeLiveSpan()
```

##### `ResetGlobalTimeSelectable` <a name="ResetGlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable"></a>

```csharp
private void ResetGlobalTimeSelectable()
```

##### `ResetSelectableTemplateVars` <a name="ResetSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars"></a>

```csharp
private void ResetSelectableTemplateVars()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetViewingPreferencesHighDensity` <a name="ResetViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity"></a>

```csharp
private void ResetViewingPreferencesHighDensity()
```

##### `ResetViewingPreferencesTheme` <a name="ResetViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme"></a>

```csharp
private void ResetViewingPreferencesTheme()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecureEmbedDashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecureEmbedDashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecureEmbedDashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecureEmbedDashboard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureEmbedDashboard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureEmbedDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecureEmbedDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential">Credential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars">SelectableTemplateVars</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput">GlobalTimeLiveSpanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput">GlobalTimeSelectableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput">SelectableTemplateVarsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput">ViewingPreferencesHighDensityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput">ViewingPreferencesThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan">GlobalTimeLiveSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable">GlobalTimeSelectable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity">ViewingPreferencesHighDensity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme">ViewingPreferencesTheme</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential"></a>

```csharp
public string Credential { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SelectableTemplateVars`<sup>Required</sup> <a name="SelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars"></a>

```csharp
public SecureEmbedDashboardSelectableTemplateVarsList SelectableTemplateVars { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput"></a>

```csharp
public string DashboardIdInput { get; }
```

- *Type:* string

---

##### `GlobalTimeLiveSpanInput`<sup>Optional</sup> <a name="GlobalTimeLiveSpanInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput"></a>

```csharp
public string GlobalTimeLiveSpanInput { get; }
```

- *Type:* string

---

##### `GlobalTimeSelectableInput`<sup>Optional</sup> <a name="GlobalTimeSelectableInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput"></a>

```csharp
public bool|IResolvable GlobalTimeSelectableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectableTemplateVarsInput`<sup>Optional</sup> <a name="SelectableTemplateVarsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput"></a>

```csharp
public IResolvable|SecureEmbedDashboardSelectableTemplateVars[] SelectableTemplateVarsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ViewingPreferencesHighDensityInput`<sup>Optional</sup> <a name="ViewingPreferencesHighDensityInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput"></a>

```csharp
public bool|IResolvable ViewingPreferencesHighDensityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ViewingPreferencesThemeInput`<sup>Optional</sup> <a name="ViewingPreferencesThemeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput"></a>

```csharp
public string ViewingPreferencesThemeInput { get; }
```

- *Type:* string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `GlobalTimeLiveSpan`<sup>Required</sup> <a name="GlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan"></a>

```csharp
public string GlobalTimeLiveSpan { get; }
```

- *Type:* string

---

##### `GlobalTimeSelectable`<sup>Required</sup> <a name="GlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable"></a>

```csharp
public bool|IResolvable GlobalTimeSelectable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `ViewingPreferencesHighDensity`<sup>Required</sup> <a name="ViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity"></a>

```csharp
public bool|IResolvable ViewingPreferencesHighDensity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ViewingPreferencesTheme`<sup>Required</sup> <a name="ViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme"></a>

```csharp
public string ViewingPreferencesTheme { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureEmbedDashboardConfig <a name="SecureEmbedDashboardConfig" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecureEmbedDashboardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DashboardId,
    string Title,
    string GlobalTimeLiveSpan = null,
    bool|IResolvable GlobalTimeSelectable = null,
    IResolvable|SecureEmbedDashboardSelectableTemplateVars[] SelectableTemplateVars = null,
    string Status = null,
    bool|IResolvable ViewingPreferencesHighDensity = null,
    string ViewingPreferencesTheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId">DashboardId</a></code> | <code>string</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title">Title</a></code> | <code>string</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan">GlobalTimeLiveSpan</a></code> | <code>string</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable">GlobalTimeSelectable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars">SelectableTemplateVars</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]</code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status">Status</a></code> | <code>string</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity">ViewingPreferencesHighDensity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme">ViewingPreferencesTheme</a></code> | <code>string</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId"></a>

```csharp
public string DashboardId { get; set; }
```

- *Type:* string

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `GlobalTimeLiveSpan`<sup>Optional</sup> <a name="GlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan"></a>

```csharp
public string GlobalTimeLiveSpan { get; set; }
```

- *Type:* string

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `GlobalTimeSelectable`<sup>Optional</sup> <a name="GlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable"></a>

```csharp
public bool|IResolvable GlobalTimeSelectable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `SelectableTemplateVars`<sup>Optional</sup> <a name="SelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars"></a>

```csharp
public IResolvable|SecureEmbedDashboardSelectableTemplateVars[] SelectableTemplateVars { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `ViewingPreferencesHighDensity`<sup>Optional</sup> <a name="ViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity"></a>

```csharp
public bool|IResolvable ViewingPreferencesHighDensity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `ViewingPreferencesTheme`<sup>Optional</sup> <a name="ViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme"></a>

```csharp
public string ViewingPreferencesTheme { get; set; }
```

- *Type:* string

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

### SecureEmbedDashboardSelectableTemplateVars <a name="SecureEmbedDashboardSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecureEmbedDashboardSelectableTemplateVars {
    string Name,
    string[] DefaultValues = null,
    string Prefix = null,
    string Type = null,
    string[] VisibleTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name">Name</a></code> | <code>string</code> | The name of the template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues">DefaultValues</a></code> | <code>string[]</code> | The default values for this template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix">Prefix</a></code> | <code>string</code> | The tag prefix for this template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type">Type</a></code> | <code>string</code> | The type of the template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags">VisibleTags</a></code> | <code>string[]</code> | The visible tag values for this template variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#name SecureEmbedDashboard#name}

---

##### `DefaultValues`<sup>Optional</sup> <a name="DefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues"></a>

```csharp
public string[] DefaultValues { get; set; }
```

- *Type:* string[]

The default values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#default_values SecureEmbedDashboard#default_values}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The tag prefix for this template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#prefix SecureEmbedDashboard#prefix}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#type SecureEmbedDashboard#type}

---

##### `VisibleTags`<sup>Optional</sup> <a name="VisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags"></a>

```csharp
public string[] VisibleTags { get; set; }
```

- *Type:* string[]

The visible tag values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#visible_tags SecureEmbedDashboard#visible_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureEmbedDashboardSelectableTemplateVarsList <a name="SecureEmbedDashboardSelectableTemplateVarsList" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecureEmbedDashboardSelectableTemplateVarsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get"></a>

```csharp
private SecureEmbedDashboardSelectableTemplateVarsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue"></a>

```csharp
public IResolvable|SecureEmbedDashboardSelectableTemplateVars[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>[]

---


### SecureEmbedDashboardSelectableTemplateVarsOutputReference <a name="SecureEmbedDashboardSelectableTemplateVarsOutputReference" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecureEmbedDashboardSelectableTemplateVarsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues">ResetDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags">ResetVisibleTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValues` <a name="ResetDefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues"></a>

```csharp
private void ResetDefaultValues()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVisibleTags` <a name="ResetVisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags"></a>

```csharp
private void ResetVisibleTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput">DefaultValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput">VisibleTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues">DefaultValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags">VisibleTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValuesInput`<sup>Optional</sup> <a name="DefaultValuesInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput"></a>

```csharp
public string[] DefaultValuesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VisibleTagsInput`<sup>Optional</sup> <a name="VisibleTagsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput"></a>

```csharp
public string[] VisibleTagsInput { get; }
```

- *Type:* string[]

---

##### `DefaultValues`<sup>Required</sup> <a name="DefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues"></a>

```csharp
public string[] DefaultValues { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VisibleTags`<sup>Required</sup> <a name="VisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags"></a>

```csharp
public string[] VisibleTags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecureEmbedDashboardSelectableTemplateVars InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>

---



