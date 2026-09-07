# `rumRetentionQuota` Submodule <a name="`rumRetentionQuota` Submodule" id="@cdktn/provider-datadog.rumRetentionQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionQuota <a name="RumRetentionQuota" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new RumRetentionQuota(Construct Scope, string Id, RumRetentionQuotaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig">RumRetentionQuotaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig">RumRetentionQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom">PutCustom</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom"></a>

```csharp
private void PutCustom(RumRetentionQuotaCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

RumRetentionQuota.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

RumRetentionQuota.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

RumRetentionQuota.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

RumRetentionQuota.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumRetentionQuota to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumRetentionQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode">Mode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom"></a>

```csharp
public RumRetentionQuotaCustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput"></a>

```csharp
public IResolvable|RumRetentionQuotaCustom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionQuotaConfig <a name="RumRetentionQuotaConfig" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new RumRetentionQuotaConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    RumRetentionQuotaCustom Custom,
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode">Mode</a></code> | <code>string</code> | The retention quota mode. Valid values are `custom`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom"></a>

```csharp
public RumRetentionQuotaCustom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

### RumRetentionQuotaCustom <a name="RumRetentionQuotaCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new RumRetentionQuotaCustom {
    string DailyResetTime,
    string DailyResetTimezone,
    string QuotaReachedAction,
    double SessionLimit,
    string WindowType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime">DailyResetTime</a></code> | <code>string</code> | The time of day the quota resets, in `HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone">DailyResetTimezone</a></code> | <code>string</code> | The UTC offset for `daily_reset_time`, in `±HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction">QuotaReachedAction</a></code> | <code>string</code> | The action taken after the quota is reached. Valid values are `stop`, `slowdown`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit">SessionLimit</a></code> | <code>double</code> | The maximum number of sessions to retain within the window. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType">WindowType</a></code> | <code>string</code> | The window over which the quota resets. Valid values are `daily`. |

---

##### `DailyResetTime`<sup>Required</sup> <a name="DailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime"></a>

```csharp
public string DailyResetTime { get; set; }
```

- *Type:* string

The time of day the quota resets, in `HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}

---

##### `DailyResetTimezone`<sup>Required</sup> <a name="DailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone"></a>

```csharp
public string DailyResetTimezone { get; set; }
```

- *Type:* string

The UTC offset for `daily_reset_time`, in `±HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}

---

##### `QuotaReachedAction`<sup>Required</sup> <a name="QuotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction"></a>

```csharp
public string QuotaReachedAction { get; set; }
```

- *Type:* string

The action taken after the quota is reached. Valid values are `stop`, `slowdown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}

---

##### `SessionLimit`<sup>Required</sup> <a name="SessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit"></a>

```csharp
public double SessionLimit { get; set; }
```

- *Type:* double

The maximum number of sessions to retain within the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}

---

##### `WindowType`<sup>Required</sup> <a name="WindowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType"></a>

```csharp
public string WindowType { get; set; }
```

- *Type:* string

The window over which the quota resets. Valid values are `daily`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}

---

## Classes <a name="Classes" id="Classes"></a>

### RumRetentionQuotaCustomOutputReference <a name="RumRetentionQuotaCustomOutputReference" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new RumRetentionQuotaCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput">DailyResetTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput">DailyResetTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput">QuotaReachedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput">SessionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput">WindowTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime">DailyResetTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone">DailyResetTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction">QuotaReachedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit">SessionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType">WindowType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailyResetTimeInput`<sup>Optional</sup> <a name="DailyResetTimeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput"></a>

```csharp
public string DailyResetTimeInput { get; }
```

- *Type:* string

---

##### `DailyResetTimezoneInput`<sup>Optional</sup> <a name="DailyResetTimezoneInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput"></a>

```csharp
public string DailyResetTimezoneInput { get; }
```

- *Type:* string

---

##### `QuotaReachedActionInput`<sup>Optional</sup> <a name="QuotaReachedActionInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput"></a>

```csharp
public string QuotaReachedActionInput { get; }
```

- *Type:* string

---

##### `SessionLimitInput`<sup>Optional</sup> <a name="SessionLimitInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput"></a>

```csharp
public double SessionLimitInput { get; }
```

- *Type:* double

---

##### `WindowTypeInput`<sup>Optional</sup> <a name="WindowTypeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput"></a>

```csharp
public string WindowTypeInput { get; }
```

- *Type:* string

---

##### `DailyResetTime`<sup>Required</sup> <a name="DailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime"></a>

```csharp
public string DailyResetTime { get; }
```

- *Type:* string

---

##### `DailyResetTimezone`<sup>Required</sup> <a name="DailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone"></a>

```csharp
public string DailyResetTimezone { get; }
```

- *Type:* string

---

##### `QuotaReachedAction`<sup>Required</sup> <a name="QuotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction"></a>

```csharp
public string QuotaReachedAction { get; }
```

- *Type:* string

---

##### `SessionLimit`<sup>Required</sup> <a name="SessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit"></a>

```csharp
public double SessionLimit { get; }
```

- *Type:* double

---

##### `WindowType`<sup>Required</sup> <a name="WindowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType"></a>

```csharp
public string WindowType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RumRetentionQuotaCustom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---



