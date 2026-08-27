# `governanceControl` Submodule <a name="`governanceControl` Submodule" id="@cdktn/provider-datadog.governanceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GovernanceControl <a name="GovernanceControl" id="@cdktn/provider-datadog.governanceControl.GovernanceControl"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control datadog_governance_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControl(Construct Scope, string Id, GovernanceControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig">GovernanceControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig">GovernanceControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetDetectionParameters">ResetDetectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationParameters">ResetMitigationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationType">ResetMitigationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(IResolvable|GovernanceControlNotificationSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

---

##### `ResetDetectionParameters` <a name="ResetDetectionParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetDetectionParameters"></a>

```csharp
private void ResetDetectionParameters()
```

##### `ResetMitigationParameters` <a name="ResetMitigationParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationParameters"></a>

```csharp
private void ResetMitigationParameters()
```

##### `ResetMitigationType` <a name="ResetMitigationType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationType"></a>

```csharp
private void ResetMitigationType()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetNotificationSettings"></a>

```csharp
private void ResetNotificationSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GovernanceControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GovernanceControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GovernanceControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GovernanceControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GovernanceControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GovernanceControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GovernanceControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList">GovernanceControlNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParametersInput">DetectionParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionTypeInput">DetectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParametersInput">MitigationParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationTypeInput">MitigationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParameters">DetectionParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionType">DetectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParameters">MitigationParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationType">MitigationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettings"></a>

```csharp
public GovernanceControlNotificationSettingsList NotificationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList">GovernanceControlNotificationSettingsList</a>

---

##### `DetectionParametersInput`<sup>Optional</sup> <a name="DetectionParametersInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParametersInput"></a>

```csharp
public string DetectionParametersInput { get; }
```

- *Type:* string

---

##### `DetectionTypeInput`<sup>Optional</sup> <a name="DetectionTypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionTypeInput"></a>

```csharp
public string DetectionTypeInput { get; }
```

- *Type:* string

---

##### `MitigationParametersInput`<sup>Optional</sup> <a name="MitigationParametersInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParametersInput"></a>

```csharp
public string MitigationParametersInput { get; }
```

- *Type:* string

---

##### `MitigationTypeInput`<sup>Optional</sup> <a name="MitigationTypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationTypeInput"></a>

```csharp
public string MitigationTypeInput { get; }
```

- *Type:* string

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettingsInput"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettings[] NotificationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

---

##### `DetectionParameters`<sup>Required</sup> <a name="DetectionParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParameters"></a>

```csharp
public string DetectionParameters { get; }
```

- *Type:* string

---

##### `DetectionType`<sup>Required</sup> <a name="DetectionType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionType"></a>

```csharp
public string DetectionType { get; }
```

- *Type:* string

---

##### `MitigationParameters`<sup>Required</sup> <a name="MitigationParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParameters"></a>

```csharp
public string MitigationParameters { get; }
```

- *Type:* string

---

##### `MitigationType`<sup>Required</sup> <a name="MitigationType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationType"></a>

```csharp
public string MitigationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GovernanceControlConfig <a name="GovernanceControlConfig" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DetectionType,
    string DetectionParameters = null,
    string MitigationParameters = null,
    string MitigationType = null,
    IResolvable|GovernanceControlNotificationSettings[] NotificationSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionType">DetectionType</a></code> | <code>string</code> | The detection type that uniquely identifies the control, for example `unused_api_keys`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionParameters">DetectionParameters</a></code> | <code>string</code> | Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationParameters">MitigationParameters</a></code> | <code>string</code> | Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationType">MitigationType</a></code> | <code>string</code> | The mitigation type configured for the control. Empty when not configured. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.notificationSettings">NotificationSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]</code> | The notification settings for the control, one entry per event type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DetectionType`<sup>Required</sup> <a name="DetectionType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionType"></a>

```csharp
public string DetectionType { get; set; }
```

- *Type:* string

The detection type that uniquely identifies the control, for example `unused_api_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_type GovernanceControl#detection_type}

---

##### `DetectionParameters`<sup>Optional</sup> <a name="DetectionParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionParameters"></a>

```csharp
public string DetectionParameters { get; set; }
```

- *Type:* string

Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_parameters GovernanceControl#detection_parameters}

---

##### `MitigationParameters`<sup>Optional</sup> <a name="MitigationParameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationParameters"></a>

```csharp
public string MitigationParameters { get; set; }
```

- *Type:* string

Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_parameters GovernanceControl#mitigation_parameters}

---

##### `MitigationType`<sup>Optional</sup> <a name="MitigationType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationType"></a>

```csharp
public string MitigationType { get; set; }
```

- *Type:* string

The mitigation type configured for the control. Empty when not configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_type GovernanceControl#mitigation_type}

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.notificationSettings"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettings[] NotificationSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

The notification settings for the control, one entry per event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#notification_settings GovernanceControl#notification_settings}

---

### GovernanceControlNotificationSettings <a name="GovernanceControlNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlNotificationSettings {
    bool|IResolvable Enabled,
    string EventType,
    IResolvable|GovernanceControlNotificationSettingsTargets[] Targets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether notifications are enabled for this event type. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.eventType">EventType</a></code> | <code>string</code> | The event type the notification settings apply to, such as `new_detection`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]</code> | The destinations that receive notifications for this event type. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether notifications are enabled for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#enabled GovernanceControl#enabled}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

The event type the notification settings apply to, such as `new_detection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#event_type GovernanceControl#event_type}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.targets"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettingsTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

The destinations that receive notifications for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#targets GovernanceControl#targets}

---

### GovernanceControlNotificationSettingsTargets <a name="GovernanceControlNotificationSettingsTargets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlNotificationSettingsTargets {
    string Handle,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.handle">Handle</a></code> | <code>string</code> | The handle of the notification target. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.type">Type</a></code> | <code>string</code> | The type of notification target: `email`, `slack`, `at_mention`, or `case`. |

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.handle"></a>

```csharp
public string Handle { get; set; }
```

- *Type:* string

The handle of the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#handle GovernanceControl#handle}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of notification target: `email`, `slack`, `at_mention`, or `case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#type GovernanceControl#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GovernanceControlNotificationSettingsList <a name="GovernanceControlNotificationSettingsList" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlNotificationSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get"></a>

```csharp
private GovernanceControlNotificationSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.internalValue"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>[]

---


### GovernanceControlNotificationSettingsOutputReference <a name="GovernanceControlNotificationSettingsOutputReference" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets">PutTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets"></a>

```csharp
private void PutTargets(IResolvable|GovernanceControlNotificationSettingsTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList">GovernanceControlNotificationSettingsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targets"></a>

```csharp
public GovernanceControlNotificationSettingsTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList">GovernanceControlNotificationSettingsTargetsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targetsInput"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettingsTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>

---


### GovernanceControlNotificationSettingsTargetsList <a name="GovernanceControlNotificationSettingsTargetsList" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlNotificationSettingsTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get"></a>

```csharp
private GovernanceControlNotificationSettingsTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GovernanceControlNotificationSettingsTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>[]

---


### GovernanceControlNotificationSettingsTargetsOutputReference <a name="GovernanceControlNotificationSettingsTargetsOutputReference" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GovernanceControlNotificationSettingsTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handleInput">HandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handle">Handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandleInput`<sup>Optional</sup> <a name="HandleInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handleInput"></a>

```csharp
public string HandleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handle"></a>

```csharp
public string Handle { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.internalValue"></a>

```csharp
public GovernanceControlNotificationSettingsTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>

---



