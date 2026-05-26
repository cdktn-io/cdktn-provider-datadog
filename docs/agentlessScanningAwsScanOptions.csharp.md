# `agentlessScanningAwsScanOptions` Submodule <a name="`agentlessScanningAwsScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAwsScanOptions <a name="AgentlessScanningAwsScanOptions" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options datadog_agentless_scanning_aws_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AgentlessScanningAwsScanOptions(Construct Scope, string Id, AgentlessScanningAwsScanOptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig">AgentlessScanningAwsScanOptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig">AgentlessScanningAwsScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetComplianceHost">ResetComplianceHost</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComplianceHost` <a name="ResetComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetComplianceHost"></a>

```csharp
private void ResetComplianceHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAwsScanOptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAwsScanOptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAwsScanOptions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AgentlessScanningAwsScanOptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentlessScanningAwsScanOptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentlessScanningAwsScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAwsScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHostInput">ComplianceHostInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput">LambdaInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput">SensitiveDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput">VulnContainersOsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput">VulnHostOsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHost">ComplianceHost</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda">Lambda</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData">SensitiveData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs">VulnContainersOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs">VulnHostOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `ComplianceHostInput`<sup>Optional</sup> <a name="ComplianceHostInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHostInput"></a>

```csharp
public bool|IResolvable ComplianceHostInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput"></a>

```csharp
public bool|IResolvable LambdaInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SensitiveDataInput`<sup>Optional</sup> <a name="SensitiveDataInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput"></a>

```csharp
public bool|IResolvable SensitiveDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnContainersOsInput`<sup>Optional</sup> <a name="VulnContainersOsInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput"></a>

```csharp
public bool|IResolvable VulnContainersOsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnHostOsInput`<sup>Optional</sup> <a name="VulnHostOsInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput"></a>

```csharp
public bool|IResolvable VulnHostOsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `ComplianceHost`<sup>Required</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHost"></a>

```csharp
public bool|IResolvable ComplianceHost { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda"></a>

```csharp
public bool|IResolvable Lambda { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SensitiveData`<sup>Required</sup> <a name="SensitiveData" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData"></a>

```csharp
public bool|IResolvable SensitiveData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs"></a>

```csharp
public bool|IResolvable VulnContainersOs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs"></a>

```csharp
public bool|IResolvable VulnHostOs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAwsScanOptionsConfig <a name="AgentlessScanningAwsScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AgentlessScanningAwsScanOptionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId,
    bool|IResolvable Lambda,
    bool|IResolvable SensitiveData,
    bool|IResolvable VulnContainersOs,
    bool|IResolvable VulnHostOs,
    bool|IResolvable ComplianceHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda">Lambda</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning of Lambda functions is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData">SensitiveData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning for sensitive data is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs">VulnContainersOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs">VulnHostOs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.complianceHost">ComplianceHost</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if host compliance scanning is enabled. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#aws_account_id AgentlessScanningAwsScanOptions#aws_account_id}

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda"></a>

```csharp
public bool|IResolvable Lambda { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning of Lambda functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#lambda AgentlessScanningAwsScanOptions#lambda}

---

##### `SensitiveData`<sup>Required</sup> <a name="SensitiveData" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData"></a>

```csharp
public bool|IResolvable SensitiveData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning for sensitive data is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#sensitive_data AgentlessScanningAwsScanOptions#sensitive_data}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs"></a>

```csharp
public bool|IResolvable VulnContainersOs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#vuln_containers_os AgentlessScanningAwsScanOptions#vuln_containers_os}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs"></a>

```csharp
public bool|IResolvable VulnHostOs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#vuln_host_os AgentlessScanningAwsScanOptions#vuln_host_os}

---

##### `ComplianceHost`<sup>Optional</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.complianceHost"></a>

```csharp
public bool|IResolvable ComplianceHost { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if host compliance scanning is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_aws_scan_options#compliance_host AgentlessScanningAwsScanOptions#compliance_host}

---



