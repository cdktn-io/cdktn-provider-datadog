# `securityMonitoringCriticalAsset` Submodule <a name="`securityMonitoringCriticalAsset` Submodule" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringCriticalAsset <a name="SecurityMonitoringCriticalAsset" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityMonitoringCriticalAsset(Construct Scope, string Id, SecurityMonitoringCriticalAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig">SecurityMonitoringCriticalAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig">SecurityMonitoringCriticalAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityMonitoringCriticalAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityMonitoringCriticalAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityMonitoringCriticalAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityMonitoringCriticalAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringCriticalAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringCriticalAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringCriticalAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput">RuleQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery">RuleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RuleQueryInput`<sup>Optional</sup> <a name="RuleQueryInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput"></a>

```csharp
public string RuleQueryInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery"></a>

```csharp
public string RuleQuery { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringCriticalAssetConfig <a name="SecurityMonitoringCriticalAssetConfig" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityMonitoringCriticalAssetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Query,
    string RuleQuery,
    string Severity,
    string Description = null,
    bool|IResolvable Enabled = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query">Query</a></code> | <code>string</code> | The query used to match a critical asset and the associated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery">RuleQuery</a></code> | <code>string</code> | The rule query to filter which detection rules this critical asset applies to. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity">Severity</a></code> | <code>string</code> | The severity change applied to signals matching this critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.description">Description</a></code> | <code>string</code> | A description of the critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the critical asset is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tags associated with the critical asset. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The query used to match a critical asset and the associated signals.

Uses the same syntax as the search bar in the Security Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery"></a>

```csharp
public string RuleQuery { get; set; }
```

- *Type:* string

The rule query to filter which detection rules this critical asset applies to.

Uses the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity change applied to signals matching this critical asset.

Valid values are `critical`, `high`, `medium`, `low`, `info`, `no-op`, `increase`, `decrease`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#description SecurityMonitoringCriticalAsset#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the critical asset is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tags associated with the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}

---



