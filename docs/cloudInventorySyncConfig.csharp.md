# `cloudInventorySyncConfig` Submodule <a name="`cloudInventorySyncConfig` Submodule" id="@cdktn/provider-datadog.cloudInventorySyncConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudInventorySyncConfig <a name="CloudInventorySyncConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfig(Construct Scope, string Id, CloudInventorySyncConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig">CloudInventorySyncConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig">CloudInventorySyncConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp">PutGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp">ResetGcp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAws` <a name="PutAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws"></a>

```csharp
private void PutAws(CloudInventorySyncConfigAws Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure"></a>

```csharp
private void PutAzure(CloudInventorySyncConfigAzure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `PutGcp` <a name="PutGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp"></a>

```csharp
private void PutGcp(CloudInventorySyncConfigGcp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws"></a>

```csharp
private void ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetGcp` <a name="ResetGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp"></a>

```csharp
private void ResetGcp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudInventorySyncConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudInventorySyncConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudInventorySyncConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudInventorySyncConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudInventorySyncConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudInventorySyncConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudInventorySyncConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput">AwsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput">AzureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput">GcpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws"></a>

```csharp
public CloudInventorySyncConfigAwsOutputReference Aws { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure"></a>

```csharp
public CloudInventorySyncConfigAzureOutputReference Azure { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a>

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp"></a>

```csharp
public CloudInventorySyncConfigGcpOutputReference Gcp { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput"></a>

```csharp
public IResolvable|CloudInventorySyncConfigAws AwsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput"></a>

```csharp
public IResolvable|CloudInventorySyncConfigAzure AzureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput"></a>

```csharp
public string CloudProviderInput { get; }
```

- *Type:* string

---

##### `GcpInput`<sup>Optional</sup> <a name="GcpInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput"></a>

```csharp
public IResolvable|CloudInventorySyncConfigGcp GcpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudInventorySyncConfigAws <a name="CloudInventorySyncConfigAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigAws {
    string AwsAccountId = null,
    string DestinationBucketName = null,
    string DestinationBucketRegion = null,
    string DestinationPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | AWS Account ID of the account holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName">DestinationBucketName</a></code> | <code>string</code> | Name of the S3 bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion">DestinationBucketRegion</a></code> | <code>string</code> | AWS Region of the bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix">DestinationPrefix</a></code> | <code>string</code> | Prefix path within the bucket for inventory files. |

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

AWS Account ID of the account holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}

---

##### `DestinationBucketName`<sup>Optional</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName"></a>

```csharp
public string DestinationBucketName { get; set; }
```

- *Type:* string

Name of the S3 bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `DestinationBucketRegion`<sup>Optional</sup> <a name="DestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion"></a>

```csharp
public string DestinationBucketRegion { get; set; }
```

- *Type:* string

AWS Region of the bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}

---

##### `DestinationPrefix`<sup>Optional</sup> <a name="DestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix"></a>

```csharp
public string DestinationPrefix { get; set; }
```

- *Type:* string

Prefix path within the bucket for inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}

---

### CloudInventorySyncConfigAzure <a name="CloudInventorySyncConfigAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigAzure {
    string ClientId = null,
    string Container = null,
    string ResourceGroup = null,
    string StorageAccount = null,
    string SubscriptionId = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId">ClientId</a></code> | <code>string</code> | Azure Client ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container">Container</a></code> | <code>string</code> | Azure Storage Container name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Azure Resource Group name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount">StorageAccount</a></code> | <code>string</code> | Azure Storage Account name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Azure Subscription ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId">TenantId</a></code> | <code>string</code> | Azure Tenant ID. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Azure Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

Azure Storage Container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Azure Resource Group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount"></a>

```csharp
public string StorageAccount { get; set; }
```

- *Type:* string

Azure Storage Account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Azure Subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Azure Tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}

---

### CloudInventorySyncConfigConfig <a name="CloudInventorySyncConfigConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CloudProvider,
    CloudInventorySyncConfigAws Aws = null,
    CloudInventorySyncConfigAzure Azure = null,
    CloudInventorySyncConfigGcp Gcp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; set; }
```

- *Type:* string

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws"></a>

```csharp
public CloudInventorySyncConfigAws Aws { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure"></a>

```csharp
public CloudInventorySyncConfigAzure Azure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `Gcp`<sup>Optional</sup> <a name="Gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp"></a>

```csharp
public CloudInventorySyncConfigGcp Gcp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

### CloudInventorySyncConfigGcp <a name="CloudInventorySyncConfigGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigGcp {
    string DestinationBucketName = null,
    string ProjectId = null,
    string ServiceAccountEmail = null,
    string SourceBucketName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName">DestinationBucketName</a></code> | <code>string</code> | Name of the GCS bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId">ProjectId</a></code> | <code>string</code> | GCP Project ID of the project holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email used for reading the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName">SourceBucketName</a></code> | <code>string</code> | Name of the source bucket the inventory report is generated for. |

---

##### `DestinationBucketName`<sup>Optional</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName"></a>

```csharp
public string DestinationBucketName { get; set; }
```

- *Type:* string

Name of the GCS bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

GCP Project ID of the project holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email used for reading the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}

---

##### `SourceBucketName`<sup>Optional</sup> <a name="SourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName"></a>

```csharp
public string SourceBucketName { get; set; }
```

- *Type:* string

Name of the source bucket the inventory report is generated for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudInventorySyncConfigAwsOutputReference <a name="CloudInventorySyncConfigAwsOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName">ResetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion">ResetDestinationBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix">ResetDestinationPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetDestinationBucketName` <a name="ResetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName"></a>

```csharp
private void ResetDestinationBucketName()
```

##### `ResetDestinationBucketRegion` <a name="ResetDestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion"></a>

```csharp
private void ResetDestinationBucketRegion()
```

##### `ResetDestinationPrefix` <a name="ResetDestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix"></a>

```csharp
private void ResetDestinationPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput">DestinationBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput">DestinationBucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput">DestinationPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName">DestinationBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion">DestinationBucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix">DestinationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `DestinationBucketNameInput`<sup>Optional</sup> <a name="DestinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput"></a>

```csharp
public string DestinationBucketNameInput { get; }
```

- *Type:* string

---

##### `DestinationBucketRegionInput`<sup>Optional</sup> <a name="DestinationBucketRegionInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput"></a>

```csharp
public string DestinationBucketRegionInput { get; }
```

- *Type:* string

---

##### `DestinationPrefixInput`<sup>Optional</sup> <a name="DestinationPrefixInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput"></a>

```csharp
public string DestinationPrefixInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DestinationBucketName`<sup>Required</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName"></a>

```csharp
public string DestinationBucketName { get; }
```

- *Type:* string

---

##### `DestinationBucketRegion`<sup>Required</sup> <a name="DestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion"></a>

```csharp
public string DestinationBucketRegion { get; }
```

- *Type:* string

---

##### `DestinationPrefix`<sup>Required</sup> <a name="DestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix"></a>

```csharp
public string DestinationPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudInventorySyncConfigAws InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---


### CloudInventorySyncConfigAzureOutputReference <a name="CloudInventorySyncConfigAzureOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount"></a>

```csharp
private void ResetStorageAccount()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount">StorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput"></a>

```csharp
public string StorageAccountInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount"></a>

```csharp
public string StorageAccount { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudInventorySyncConfigAzure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---


### CloudInventorySyncConfigGcpOutputReference <a name="CloudInventorySyncConfigGcpOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudInventorySyncConfigGcpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName">ResetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName">ResetSourceBucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationBucketName` <a name="ResetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName"></a>

```csharp
private void ResetDestinationBucketName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

##### `ResetSourceBucketName` <a name="ResetSourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName"></a>

```csharp
private void ResetSourceBucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput">DestinationBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput">SourceBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName">DestinationBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName">SourceBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationBucketNameInput`<sup>Optional</sup> <a name="DestinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput"></a>

```csharp
public string DestinationBucketNameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `SourceBucketNameInput`<sup>Optional</sup> <a name="SourceBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput"></a>

```csharp
public string SourceBucketNameInput { get; }
```

- *Type:* string

---

##### `DestinationBucketName`<sup>Required</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName"></a>

```csharp
public string DestinationBucketName { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `SourceBucketName`<sup>Required</sup> <a name="SourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName"></a>

```csharp
public string SourceBucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudInventorySyncConfigGcp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---



