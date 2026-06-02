# `gcpUcConfig` Submodule <a name="`gcpUcConfig` Submodule" id="@cdktn/provider-datadog.gcpUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpUcConfig <a name="GcpUcConfig" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config datadog_gcp_uc_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GcpUcConfig(Construct Scope, string Id, GcpUcConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig">GcpUcConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig">GcpUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.resetExportPrefix">ResetExportPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetExportPrefix` <a name="ResetExportPrefix" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.resetExportPrefix"></a>

```csharp
private void ResetExportPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GcpUcConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GcpUcConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GcpUcConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GcpUcConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

GcpUcConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GcpUcConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpUcConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GcpUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.errorMessages">ErrorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.months">Months</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.statusUpdatedAt">StatusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountIdInput">BillingAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetNameInput">ExportDatasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefixInput">ExportPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectNameInput">ExportProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountId">BillingAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetName">ExportDatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefix">ExportPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectName">ExportProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.errorMessages"></a>

```csharp
public string[] ErrorMessages { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.months"></a>

```csharp
public double Months { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusUpdatedAt`<sup>Required</sup> <a name="StatusUpdatedAt" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.statusUpdatedAt"></a>

```csharp
public string StatusUpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `BillingAccountIdInput`<sup>Optional</sup> <a name="BillingAccountIdInput" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountIdInput"></a>

```csharp
public string BillingAccountIdInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ExportDatasetNameInput`<sup>Optional</sup> <a name="ExportDatasetNameInput" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetNameInput"></a>

```csharp
public string ExportDatasetNameInput { get; }
```

- *Type:* string

---

##### `ExportPrefixInput`<sup>Optional</sup> <a name="ExportPrefixInput" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefixInput"></a>

```csharp
public string ExportPrefixInput { get; }
```

- *Type:* string

---

##### `ExportProjectNameInput`<sup>Optional</sup> <a name="ExportProjectNameInput" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectNameInput"></a>

```csharp
public string ExportProjectNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountId"></a>

```csharp
public string BillingAccountId { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ExportDatasetName`<sup>Required</sup> <a name="ExportDatasetName" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetName"></a>

```csharp
public string ExportDatasetName { get; }
```

- *Type:* string

---

##### `ExportPrefix`<sup>Required</sup> <a name="ExportPrefix" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefix"></a>

```csharp
public string ExportPrefix { get; }
```

- *Type:* string

---

##### `ExportProjectName`<sup>Required</sup> <a name="ExportProjectName" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectName"></a>

```csharp
public string ExportProjectName { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpUcConfigConfig <a name="GcpUcConfigConfig" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new GcpUcConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BillingAccountId,
    string BucketName,
    string ExportDatasetName,
    string ExportProjectName,
    string ServiceAccount,
    string ExportPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.billingAccountId">BillingAccountId</a></code> | <code>string</code> | The Google Cloud account ID. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.bucketName">BucketName</a></code> | <code>string</code> | The Google Cloud bucket name used to store the Usage Cost export. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportDatasetName">ExportDatasetName</a></code> | <code>string</code> | The export dataset name used for the Google Cloud Usage Cost report. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportProjectName">ExportProjectName</a></code> | <code>string</code> | The name of the Google Cloud Usage Cost report. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The unique Google Cloud service account email. |
| <code><a href="#@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportPrefix">ExportPrefix</a></code> | <code>string</code> | The export prefix used for the Google Cloud Usage Cost report. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.billingAccountId"></a>

```csharp
public string BillingAccountId { get; set; }
```

- *Type:* string

The Google Cloud account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#billing_account_id GcpUcConfig#billing_account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The Google Cloud bucket name used to store the Usage Cost export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#bucket_name GcpUcConfig#bucket_name}

---

##### `ExportDatasetName`<sup>Required</sup> <a name="ExportDatasetName" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportDatasetName"></a>

```csharp
public string ExportDatasetName { get; set; }
```

- *Type:* string

The export dataset name used for the Google Cloud Usage Cost report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#export_dataset_name GcpUcConfig#export_dataset_name}

---

##### `ExportProjectName`<sup>Required</sup> <a name="ExportProjectName" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportProjectName"></a>

```csharp
public string ExportProjectName { get; set; }
```

- *Type:* string

The name of the Google Cloud Usage Cost report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#export_project_name GcpUcConfig#export_project_name}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The unique Google Cloud service account email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#service_account GcpUcConfig#service_account}

---

##### `ExportPrefix`<sup>Optional</sup> <a name="ExportPrefix" id="@cdktn/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportPrefix"></a>

```csharp
public string ExportPrefix { get; set; }
```

- *Type:* string

The export prefix used for the Google Cloud Usage Cost report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/gcp_uc_config#export_prefix GcpUcConfig#export_prefix}

---



