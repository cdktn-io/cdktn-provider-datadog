# `deploymentGate` Submodule <a name="`deploymentGate` Submodule" id="@cdktn/provider-datadog.deploymentGate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentGate <a name="DeploymentGate" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate datadog_deployment_gate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGate(Construct Scope, string Id, DeploymentGateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig">DeploymentGateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig">DeploymentGateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun">ResetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule"></a>

```csharp
private void PutRule(IResolvable|DeploymentGateRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

---

##### `ResetDryRun` <a name="ResetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun"></a>

```csharp
private void ResetDryRun()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule"></a>

```csharp
private void ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DeploymentGate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DeploymentGate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DeploymentGate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DeploymentGate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeploymentGate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeploymentGate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DeploymentGate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput">DryRunInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput">EnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun">DryRun</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env">Env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule"></a>

```csharp
public DeploymentGateRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput"></a>

```csharp
public bool|IResolvable DryRunInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput"></a>

```csharp
public string EnvInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput"></a>

```csharp
public IResolvable|DeploymentGateRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun"></a>

```csharp
public bool|IResolvable DryRun { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env"></a>

```csharp
public string Env { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentGateConfig <a name="DeploymentGateConfig" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Env,
    string Service,
    bool|IResolvable DryRun = null,
    string Identifier = null,
    IResolvable|DeploymentGateRule[] Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env">Env</a></code> | <code>string</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service">Service</a></code> | <code>string</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun">DryRun</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier">Identifier</a></code> | <code>string</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]</code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env"></a>

```csharp
public string Env { get; set; }
```

- *Type:* string

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `DryRun`<sup>Optional</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun"></a>

```csharp
public bool|IResolvable DryRun { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule"></a>

```csharp
public IResolvable|DeploymentGateRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

### DeploymentGateRule <a name="DeploymentGateRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRule {
    string Name,
    string Type,
    bool|IResolvable DryRun = null,
    DeploymentGateRuleOptions Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name">Name</a></code> | <code>string</code> | The rule name. Must be unique within the deployment gate. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type">Type</a></code> | <code>string</code> | The rule type (e.g., 'faulty_deployment_detection', 'monitor'). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun">DryRun</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the rule is in dry run mode. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The rule name. Must be unique within the deployment gate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#name DeploymentGate#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The rule type (e.g., 'faulty_deployment_detection', 'monitor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#type DeploymentGate#type}

---

##### `DryRun`<sup>Optional</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun"></a>

```csharp
public bool|IResolvable DryRun { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the rule is in dry run mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options"></a>

```csharp
public DeploymentGateRuleOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#options DeploymentGate#options}

---

### DeploymentGateRuleOptions <a name="DeploymentGateRuleOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleOptions {
    string[] AllowedResources = null,
    double Duration = null,
    string[] ExcludedResources = null,
    bool|IResolvable FailOnNoData = null,
    bool|IResolvable FailOnNoGroupsFound = null,
    IResolvable|DeploymentGateRuleOptionsMonitorIds[] MonitorIds = null,
    string Query = null,
    double Warmup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.allowedResources">AllowedResources</a></code> | <code>string[]</code> | Resources to include in faulty deployment detection. Mutually exclusive with excluded_resources. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration">Duration</a></code> | <code>double</code> | The duration for the rule. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources">ExcludedResources</a></code> | <code>string[]</code> | Resources to exclude from faulty deployment detection. Mutually exclusive with allowed_resources. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoData">FailOnNoData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Fail if a matching monitor group is in NO DATA state (API default: true). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoGroupsFound">FailOnNoGroupsFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Fail if no monitor groups are found (API default: false). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.monitorIds">MonitorIds</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]</code> | Specific monitors to evaluate. Mutually exclusive with query. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query">Query</a></code> | <code>string</code> | A query that selects the monitors to evaluate. Mutually exclusive with monitor_ids. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.warmup">Warmup</a></code> | <code>double</code> | Seconds to wait after deployment starts before evaluating monitors (API default: 0). |

---

##### `AllowedResources`<sup>Optional</sup> <a name="AllowedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.allowedResources"></a>

```csharp
public string[] AllowedResources { get; set; }
```

- *Type:* string[]

Resources to include in faulty deployment detection. Mutually exclusive with excluded_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#allowed_resources DeploymentGate#allowed_resources}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

The duration for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#duration DeploymentGate#duration}

---

##### `ExcludedResources`<sup>Optional</sup> <a name="ExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources"></a>

```csharp
public string[] ExcludedResources { get; set; }
```

- *Type:* string[]

Resources to exclude from faulty deployment detection. Mutually exclusive with allowed_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#excluded_resources DeploymentGate#excluded_resources}

---

##### `FailOnNoData`<sup>Optional</sup> <a name="FailOnNoData" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoData"></a>

```csharp
public bool|IResolvable FailOnNoData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Fail if a matching monitor group is in NO DATA state (API default: true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#fail_on_no_data DeploymentGate#fail_on_no_data}

---

##### `FailOnNoGroupsFound`<sup>Optional</sup> <a name="FailOnNoGroupsFound" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoGroupsFound"></a>

```csharp
public bool|IResolvable FailOnNoGroupsFound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Fail if no monitor groups are found (API default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#fail_on_no_groups_found DeploymentGate#fail_on_no_groups_found}

---

##### `MonitorIds`<sup>Optional</sup> <a name="MonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.monitorIds"></a>

```csharp
public IResolvable|DeploymentGateRuleOptionsMonitorIds[] MonitorIds { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]

Specific monitors to evaluate. Mutually exclusive with query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#monitor_ids DeploymentGate#monitor_ids}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A query that selects the monitors to evaluate. Mutually exclusive with monitor_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#query DeploymentGate#query}

---

##### `Warmup`<sup>Optional</sup> <a name="Warmup" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.warmup"></a>

```csharp
public double Warmup { get; set; }
```

- *Type:* double

Seconds to wait after deployment starts before evaluating monitors (API default: 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#warmup DeploymentGate#warmup}

---

### DeploymentGateRuleOptionsMonitorIds <a name="DeploymentGateRuleOptionsMonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleOptionsMonitorIds {
    string[] Groups,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.groups">Groups</a></code> | <code>string[]</code> | Exact group names to evaluate; an empty list evaluates all groups. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.id">Id</a></code> | <code>string</code> | The monitor's decimal ID. |

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Exact group names to evaluate; an empty list evaluates all groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#groups DeploymentGate#groups}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The monitor's decimal ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#id DeploymentGate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentGateRuleList <a name="DeploymentGateRuleList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get"></a>

```csharp
private DeploymentGateRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue"></a>

```csharp
public IResolvable|DeploymentGateRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>[]

---


### DeploymentGateRuleOptionsMonitorIdsList <a name="DeploymentGateRuleOptionsMonitorIdsList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleOptionsMonitorIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.get"></a>

```csharp
private DeploymentGateRuleOptionsMonitorIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.internalValue"></a>

```csharp
public IResolvable|DeploymentGateRuleOptionsMonitorIds[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]

---


### DeploymentGateRuleOptionsMonitorIdsOutputReference <a name="DeploymentGateRuleOptionsMonitorIdsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleOptionsMonitorIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeploymentGateRuleOptionsMonitorIds InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>

---


### DeploymentGateRuleOptionsOutputReference <a name="DeploymentGateRuleOptionsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.putMonitorIds">PutMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetAllowedResources">ResetAllowedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources">ResetExcludedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoData">ResetFailOnNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoGroupsFound">ResetFailOnNoGroupsFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetMonitorIds">ResetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetWarmup">ResetWarmup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitorIds` <a name="PutMonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.putMonitorIds"></a>

```csharp
private void PutMonitorIds(IResolvable|DeploymentGateRuleOptionsMonitorIds[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.putMonitorIds.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]

---

##### `ResetAllowedResources` <a name="ResetAllowedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetAllowedResources"></a>

```csharp
private void ResetAllowedResources()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetExcludedResources` <a name="ResetExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources"></a>

```csharp
private void ResetExcludedResources()
```

##### `ResetFailOnNoData` <a name="ResetFailOnNoData" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoData"></a>

```csharp
private void ResetFailOnNoData()
```

##### `ResetFailOnNoGroupsFound` <a name="ResetFailOnNoGroupsFound" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoGroupsFound"></a>

```csharp
private void ResetFailOnNoGroupsFound()
```

##### `ResetMonitorIds` <a name="ResetMonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetMonitorIds"></a>

```csharp
private void ResetMonitorIds()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetWarmup` <a name="ResetWarmup" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetWarmup"></a>

```csharp
private void ResetWarmup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIds">MonitorIds</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList">DeploymentGateRuleOptionsMonitorIdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResourcesInput">AllowedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput">ExcludedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoDataInput">FailOnNoDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFoundInput">FailOnNoGroupsFoundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIdsInput">MonitorIdsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmupInput">WarmupInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResources">AllowedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources">ExcludedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoData">FailOnNoData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFound">FailOnNoGroupsFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmup">Warmup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MonitorIds`<sup>Required</sup> <a name="MonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIds"></a>

```csharp
public DeploymentGateRuleOptionsMonitorIdsList MonitorIds { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList">DeploymentGateRuleOptionsMonitorIdsList</a>

---

##### `AllowedResourcesInput`<sup>Optional</sup> <a name="AllowedResourcesInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResourcesInput"></a>

```csharp
public string[] AllowedResourcesInput { get; }
```

- *Type:* string[]

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `ExcludedResourcesInput`<sup>Optional</sup> <a name="ExcludedResourcesInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput"></a>

```csharp
public string[] ExcludedResourcesInput { get; }
```

- *Type:* string[]

---

##### `FailOnNoDataInput`<sup>Optional</sup> <a name="FailOnNoDataInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoDataInput"></a>

```csharp
public bool|IResolvable FailOnNoDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOnNoGroupsFoundInput`<sup>Optional</sup> <a name="FailOnNoGroupsFoundInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFoundInput"></a>

```csharp
public bool|IResolvable FailOnNoGroupsFoundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MonitorIdsInput`<sup>Optional</sup> <a name="MonitorIdsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIdsInput"></a>

```csharp
public IResolvable|DeploymentGateRuleOptionsMonitorIds[] MonitorIdsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds">DeploymentGateRuleOptionsMonitorIds</a>[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `WarmupInput`<sup>Optional</sup> <a name="WarmupInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmupInput"></a>

```csharp
public double WarmupInput { get; }
```

- *Type:* double

---

##### `AllowedResources`<sup>Required</sup> <a name="AllowedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResources"></a>

```csharp
public string[] AllowedResources { get; }
```

- *Type:* string[]

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `ExcludedResources`<sup>Required</sup> <a name="ExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources"></a>

```csharp
public string[] ExcludedResources { get; }
```

- *Type:* string[]

---

##### `FailOnNoData`<sup>Required</sup> <a name="FailOnNoData" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoData"></a>

```csharp
public bool|IResolvable FailOnNoData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOnNoGroupsFound`<sup>Required</sup> <a name="FailOnNoGroupsFound" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFound"></a>

```csharp
public bool|IResolvable FailOnNoGroupsFound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Warmup`<sup>Required</sup> <a name="Warmup" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmup"></a>

```csharp
public double Warmup { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeploymentGateRuleOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---


### DeploymentGateRuleOutputReference <a name="DeploymentGateRuleOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DeploymentGateRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun">ResetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions"></a>

```csharp
private void PutOptions(DeploymentGateRuleOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `ResetDryRun` <a name="ResetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun"></a>

```csharp
private void ResetDryRun()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput">DryRunInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun">DryRun</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options"></a>

```csharp
public DeploymentGateRuleOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a>

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput"></a>

```csharp
public bool|IResolvable DryRunInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput"></a>

```csharp
public IResolvable|DeploymentGateRuleOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun"></a>

```csharp
public bool|IResolvable DryRun { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeploymentGateRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>

---



