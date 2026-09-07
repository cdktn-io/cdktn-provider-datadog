# `statusPageDegradationTemplate` Submodule <a name="`statusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.statusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageDegradationTemplate <a name="StatusPageDegradationTemplate" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplate(Construct Scope, string Id, StatusPageDegradationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig">StatusPageDegradationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig">StatusPageDegradationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected">PutComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates">PutUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected">ResetComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle">ResetDegradationTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates">ResetUpdates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentsAffected` <a name="PutComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected"></a>

```csharp
private void PutComponentsAffected(IResolvable|StatusPageDegradationTemplateComponentsAffected[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

---

##### `PutUpdates` <a name="PutUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates"></a>

```csharp
private void PutUpdates(IResolvable|StatusPageDegradationTemplateUpdates[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

---

##### `ResetComponentsAffected` <a name="ResetComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected"></a>

```csharp
private void ResetComponentsAffected()
```

##### `ResetDegradationTitle` <a name="ResetDegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle"></a>

```csharp
private void ResetDegradationTitle()
```

##### `ResetUpdates` <a name="ResetUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates"></a>

```csharp
private void ResetUpdates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageDegradationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageDegradationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageDegradationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageDegradationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StatusPageDegradationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected">ComponentsAffected</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates">Updates</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput">ComponentsAffectedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput">DegradationTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput">PageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput">UpdatesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle">DegradationTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId">PageId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComponentsAffected`<sup>Required</sup> <a name="ComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected"></a>

```csharp
public StatusPageDegradationTemplateComponentsAffectedList ComponentsAffected { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Updates`<sup>Required</sup> <a name="Updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates"></a>

```csharp
public StatusPageDegradationTemplateUpdatesList Updates { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a>

---

##### `ComponentsAffectedInput`<sup>Optional</sup> <a name="ComponentsAffectedInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateComponentsAffected[] ComponentsAffectedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

---

##### `DegradationTitleInput`<sup>Optional</sup> <a name="DegradationTitleInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput"></a>

```csharp
public string DegradationTitleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PageIdInput`<sup>Optional</sup> <a name="PageIdInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput"></a>

```csharp
public string PageIdInput { get; }
```

- *Type:* string

---

##### `UpdatesInput`<sup>Optional</sup> <a name="UpdatesInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateUpdates[] UpdatesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

---

##### `DegradationTitle`<sup>Required</sup> <a name="DegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle"></a>

```csharp
public string DegradationTitle { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId"></a>

```csharp
public string PageId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageDegradationTemplateComponentsAffected <a name="StatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateComponentsAffected {
    string Id,
    string Status,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id">Id</a></code> | <code>string</code> | The ID of the affected component. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status">Status</a></code> | <code>string</code> | The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name">Name</a></code> | <code>string</code> | The name of the affected component. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#id StatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

### StatusPageDegradationTemplateConfig <a name="StatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string PageId,
    IResolvable|StatusPageDegradationTemplateComponentsAffected[] ComponentsAffected = null,
    string DegradationTitle = null,
    IResolvable|StatusPageDegradationTemplateUpdates[] Updates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId">PageId</a></code> | <code>string</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected">ComponentsAffected</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]</code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle">DegradationTitle</a></code> | <code>string</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates">Updates</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]</code> | The pre-filled updates for a degradation created from this template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId"></a>

```csharp
public string PageId { get; set; }
```

- *Type:* string

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `ComponentsAffected`<sup>Optional</sup> <a name="ComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateComponentsAffected[] ComponentsAffected { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `DegradationTitle`<sup>Optional</sup> <a name="DegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle"></a>

```csharp
public string DegradationTitle { get; set; }
```

- *Type:* string

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `Updates`<sup>Optional</sup> <a name="Updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateUpdates[] Updates { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

### StatusPageDegradationTemplateUpdates <a name="StatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateUpdates {
    string Status,
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status">Status</a></code> | <code>string</code> | The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message">Message</a></code> | <code>string</code> | The pre-filled message for this update. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

The pre-filled message for this update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#message StatusPageDegradationTemplate#message}

---

## Classes <a name="Classes" id="Classes"></a>

### StatusPageDegradationTemplateComponentsAffectedList <a name="StatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateComponentsAffectedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get"></a>

```csharp
private StatusPageDegradationTemplateComponentsAffectedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateComponentsAffected[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>[]

---


### StatusPageDegradationTemplateComponentsAffectedOutputReference <a name="StatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateComponentsAffectedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateComponentsAffected InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>

---


### StatusPageDegradationTemplateUpdatesList <a name="StatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateUpdatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get"></a>

```csharp
private StatusPageDegradationTemplateUpdatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateUpdates[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>[]

---


### StatusPageDegradationTemplateUpdatesOutputReference <a name="StatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageDegradationTemplateUpdatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StatusPageDegradationTemplateUpdates InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>

---



