# `agentlessScanningAzureScanOptions` Submodule <a name="`agentlessScanningAzureScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAzureScanOptions <a name="AgentlessScanningAzureScanOptions" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options datadog_agentless_scanning_azure_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AgentlessScanningAzureScanOptions(Construct Scope, string Id, AgentlessScanningAzureScanOptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig">AgentlessScanningAzureScanOptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig">AgentlessScanningAzureScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost">ResetComplianceHost</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComplianceHost` <a name="ResetComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost"></a>

```csharp
private void ResetComplianceHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAzureScanOptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAzureScanOptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAzureScanOptions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAzureScanOptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentlessScanningAzureScanOptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentlessScanningAzureScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAzureScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput">AzureSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput">ComplianceHostInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.functionInput">FunctionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput">VulnContainersOsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput">VulnHostOsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost">ComplianceHost</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.function">Function</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs">VulnContainersOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs">VulnHostOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AzureSubscriptionIdInput`<sup>Optional</sup> <a name="AzureSubscriptionIdInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput"></a>

```csharp
public string AzureSubscriptionIdInput { get; }
```

- *Type:* string

---

##### `ComplianceHostInput`<sup>Optional</sup> <a name="ComplianceHostInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput"></a>

```csharp
public bool|IResolvable ComplianceHostInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.functionInput"></a>

```csharp
public bool|IResolvable FunctionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnContainersOsInput`<sup>Optional</sup> <a name="VulnContainersOsInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput"></a>

```csharp
public bool|IResolvable VulnContainersOsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnHostOsInput`<sup>Optional</sup> <a name="VulnHostOsInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput"></a>

```csharp
public bool|IResolvable VulnHostOsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AzureSubscriptionId`<sup>Required</sup> <a name="AzureSubscriptionId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId"></a>

```csharp
public string AzureSubscriptionId { get; }
```

- *Type:* string

---

##### `ComplianceHost`<sup>Required</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost"></a>

```csharp
public bool|IResolvable ComplianceHost { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.function"></a>

```csharp
public bool|IResolvable Function { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs"></a>

```csharp
public bool|IResolvable VulnContainersOs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs"></a>

```csharp
public bool|IResolvable VulnHostOs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAzureScanOptionsConfig <a name="AgentlessScanningAzureScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AgentlessScanningAzureScanOptionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AzureSubscriptionId,
    bool|IResolvable Function,
    bool|IResolvable VulnContainersOs,
    bool|IResolvable VulnHostOs,
    bool|IResolvable ComplianceHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>string</code> | The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format). |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.function">Function</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning of Azure Functions is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs">VulnContainersOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs">VulnHostOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost">ComplianceHost</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether host compliance scanning is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AzureSubscriptionId`<sup>Required</sup> <a name="AzureSubscriptionId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId"></a>

```csharp
public string AzureSubscriptionId { get; set; }
```

- *Type:* string

The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options#azure_subscription_id AgentlessScanningAzureScanOptions#azure_subscription_id}

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.function"></a>

```csharp
public bool|IResolvable Function { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning of Azure Functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options#function AgentlessScanningAzureScanOptions#function}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs"></a>

```csharp
public bool|IResolvable VulnContainersOs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options#vuln_containers_os AgentlessScanningAzureScanOptions#vuln_containers_os}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs"></a>

```csharp
public bool|IResolvable VulnHostOs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options#vuln_host_os AgentlessScanningAzureScanOptions#vuln_host_os}

---

##### `ComplianceHost`<sup>Optional</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost"></a>

```csharp
public bool|IResolvable ComplianceHost { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether host compliance scanning is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/agentless_scanning_azure_scan_options#compliance_host AgentlessScanningAzureScanOptions#compliance_host}

---



