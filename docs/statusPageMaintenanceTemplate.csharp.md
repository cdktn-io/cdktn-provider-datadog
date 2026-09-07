# `statusPageMaintenanceTemplate` Submodule <a name="`statusPageMaintenanceTemplate` Submodule" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageMaintenanceTemplate <a name="StatusPageMaintenanceTemplate" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template datadog_status_page_maintenance_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageMaintenanceTemplate(Construct Scope, string Id, StatusPageMaintenanceTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig">StatusPageMaintenanceTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig">StatusPageMaintenanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription">ResetCompletedDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds">ResetComponentIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription">ResetInProgressDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle">ResetMaintenanceTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription">ResetScheduledDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCompletedDescription` <a name="ResetCompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription"></a>

```csharp
private void ResetCompletedDescription()
```

##### `ResetComponentIds` <a name="ResetComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds"></a>

```csharp
private void ResetComponentIds()
```

##### `ResetInProgressDescription` <a name="ResetInProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription"></a>

```csharp
private void ResetInProgressDescription()
```

##### `ResetMaintenanceTitle` <a name="ResetMaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle"></a>

```csharp
private void ResetMaintenanceTitle()
```

##### `ResetScheduledDescription` <a name="ResetScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription"></a>

```csharp
private void ResetScheduledDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageMaintenanceTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageMaintenanceTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageMaintenanceTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPageMaintenanceTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StatusPageMaintenanceTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StatusPageMaintenanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageMaintenanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput">CompletedDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput">ComponentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput">InProgressDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput">MaintenanceTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput">PageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput">ScheduledDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription">CompletedDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds">ComponentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription">InProgressDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle">MaintenanceTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId">PageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription">ScheduledDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `CompletedDescriptionInput`<sup>Optional</sup> <a name="CompletedDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput"></a>

```csharp
public string CompletedDescriptionInput { get; }
```

- *Type:* string

---

##### `ComponentIdsInput`<sup>Optional</sup> <a name="ComponentIdsInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput"></a>

```csharp
public string[] ComponentIdsInput { get; }
```

- *Type:* string[]

---

##### `InProgressDescriptionInput`<sup>Optional</sup> <a name="InProgressDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput"></a>

```csharp
public string InProgressDescriptionInput { get; }
```

- *Type:* string

---

##### `MaintenanceTitleInput`<sup>Optional</sup> <a name="MaintenanceTitleInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput"></a>

```csharp
public string MaintenanceTitleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PageIdInput`<sup>Optional</sup> <a name="PageIdInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput"></a>

```csharp
public string PageIdInput { get; }
```

- *Type:* string

---

##### `ScheduledDescriptionInput`<sup>Optional</sup> <a name="ScheduledDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput"></a>

```csharp
public string ScheduledDescriptionInput { get; }
```

- *Type:* string

---

##### `CompletedDescription`<sup>Required</sup> <a name="CompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription"></a>

```csharp
public string CompletedDescription { get; }
```

- *Type:* string

---

##### `ComponentIds`<sup>Required</sup> <a name="ComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds"></a>

```csharp
public string[] ComponentIds { get; }
```

- *Type:* string[]

---

##### `InProgressDescription`<sup>Required</sup> <a name="InProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription"></a>

```csharp
public string InProgressDescription { get; }
```

- *Type:* string

---

##### `MaintenanceTitle`<sup>Required</sup> <a name="MaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle"></a>

```csharp
public string MaintenanceTitle { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId"></a>

```csharp
public string PageId { get; }
```

- *Type:* string

---

##### `ScheduledDescription`<sup>Required</sup> <a name="ScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription"></a>

```csharp
public string ScheduledDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageMaintenanceTemplateConfig <a name="StatusPageMaintenanceTemplateConfig" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageMaintenanceTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string PageId,
    string CompletedDescription = null,
    string[] ComponentIds = null,
    string InProgressDescription = null,
    string MaintenanceTitle = null,
    string ScheduledDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId">PageId</a></code> | <code>string</code> | The ID of the status page this maintenance template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription">CompletedDescription</a></code> | <code>string</code> | The pre-filled description shown once the maintenance is completed. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds">ComponentIds</a></code> | <code>string[]</code> | The IDs of the components affected by a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription">InProgressDescription</a></code> | <code>string</code> | The pre-filled description shown while the maintenance is in progress. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle">MaintenanceTitle</a></code> | <code>string</code> | The title used for a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription">ScheduledDescription</a></code> | <code>string</code> | The pre-filled description shown while the maintenance is scheduled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#name StatusPageMaintenanceTemplate#name}

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId"></a>

```csharp
public string PageId { get; set; }
```

- *Type:* string

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#page_id StatusPageMaintenanceTemplate#page_id}

---

##### `CompletedDescription`<sup>Optional</sup> <a name="CompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription"></a>

```csharp
public string CompletedDescription { get; set; }
```

- *Type:* string

The pre-filled description shown once the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#completed_description StatusPageMaintenanceTemplate#completed_description}

---

##### `ComponentIds`<sup>Optional</sup> <a name="ComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds"></a>

```csharp
public string[] ComponentIds { get; set; }
```

- *Type:* string[]

The IDs of the components affected by a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#component_ids StatusPageMaintenanceTemplate#component_ids}

---

##### `InProgressDescription`<sup>Optional</sup> <a name="InProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription"></a>

```csharp
public string InProgressDescription { get; set; }
```

- *Type:* string

The pre-filled description shown while the maintenance is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#in_progress_description StatusPageMaintenanceTemplate#in_progress_description}

---

##### `MaintenanceTitle`<sup>Optional</sup> <a name="MaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle"></a>

```csharp
public string MaintenanceTitle { get; set; }
```

- *Type:* string

The title used for a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#maintenance_title StatusPageMaintenanceTemplate#maintenance_title}

---

##### `ScheduledDescription`<sup>Optional</sup> <a name="ScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription"></a>

```csharp
public string ScheduledDescription { get; set; }
```

- *Type:* string

The pre-filled description shown while the maintenance is scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#scheduled_description StatusPageMaintenanceTemplate#scheduled_description}

---



