# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccount(Construct Scope, string Id, IntegrationDatabricksAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows">PutDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows">ResetDataflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication"></a>

```csharp
private void PutAuthentication(IntegrationDatabricksAccountAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---

##### `PutDataflows` <a name="PutDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows"></a>

```csharp
private void PutDataflows(IntegrationDatabricksAccountDataflows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings"></a>

```csharp
private void PutSettings(IntegrationDatabricksAccountSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---

##### `ResetDataflows` <a name="ResetDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows"></a>

```csharp
private void ResetDataflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput">AuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput">DataflowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a>

---

##### `Dataflows`<sup>Required</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows"></a>

```csharp
public IntegrationDatabricksAccountDataflowsOutputReference Dataflows { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings"></a>

```csharp
public IntegrationDatabricksAccountSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthentication AuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---

##### `DataflowsInput`<sup>Optional</sup> <a name="DataflowsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflows DataflowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthentication <a name="IntegrationDatabricksAccountAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthentication {
    IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth DatabricksIntegrationAccountBearerTokenAuth = null,
    IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth DatabricksIntegrationAccountOAuthAuth = null,
    IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth DatabricksIntegrationAccountPrivateActionRunnerAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth">DatabricksIntegrationAccountBearerTokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | The bearer token authentication method configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth">DatabricksIntegrationAccountOAuthAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | The Databricks OAuth authentication method and service principal configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth">DatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | The Private Action Runner authentication method configured on the account. |

---

##### `DatabricksIntegrationAccountBearerTokenAuth`<sup>Optional</sup> <a name="DatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth DatabricksIntegrationAccountBearerTokenAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

The bearer token authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_bearer_token_auth IntegrationDatabricksAccount#databricks_integration_account_bearer_token_auth}

---

##### `DatabricksIntegrationAccountOAuthAuth`<sup>Optional</sup> <a name="DatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth DatabricksIntegrationAccountOAuthAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

The Databricks OAuth authentication method and service principal configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_o_auth_auth IntegrationDatabricksAccount#databricks_integration_account_o_auth_auth}

---

##### `DatabricksIntegrationAccountPrivateActionRunnerAuth`<sup>Optional</sup> <a name="DatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth DatabricksIntegrationAccountPrivateActionRunnerAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

The Private Action Runner authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_private_action_runner_auth IntegrationDatabricksAccount#databricks_integration_account_private_action_runner_auth}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth {
    string AuthType = null,
    string TokenWo = null,
    string TokenWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType">AuthType</a></code> | <code>string</code> | The authentication method type. Valid values are `bearer_token`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo">TokenWo</a></code> | <code>string</code> | Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion">TokenWoVersion</a></code> | <code>string</code> | Version trigger for token_wo rotation. String length must be at least 1. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The authentication method type. Valid values are `bearer_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `TokenWo`<sup>Optional</sup> <a name="TokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo"></a>

```csharp
public string TokenWo { get; set; }
```

- *Type:* string

Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo IntegrationDatabricksAccount#token_wo}

---

##### `TokenWoVersion`<sup>Optional</sup> <a name="TokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion"></a>

```csharp
public string TokenWoVersion { get; set; }
```

- *Type:* string

Version trigger for token_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo_version IntegrationDatabricksAccount#token_wo_version}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth {
    string ClientId,
    string ClientSecretWo,
    string ClientSecretWoVersion,
    string AuthType = null,
    string AzureTenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId">ClientId</a></code> | <code>string</code> | Client ID of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Secret of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>string</code> | Version trigger for client_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType">AuthType</a></code> | <code>string</code> | The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client ID of the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Secret of the Databricks service principal.

Generate it under User management > Service principals > Credentials & secrets in Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo IntegrationDatabricksAccount#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion"></a>

```csharp
public string ClientSecretWoVersion { get; set; }
```

- *Type:* string

Version trigger for client_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo_version IntegrationDatabricksAccount#client_secret_wo_version}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth {
    string ConnectionId,
    string UserUuid,
    string AuthType = null,
    string SecretPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId">ConnectionId</a></code> | <code>string</code> | Unique identifier of the Private Action Runner connection holding the credentials. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid">UserUuid</a></code> | <code>string</code> | Unique identifier of the user the Private Action Runner connection belongs to. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType">AuthType</a></code> | <code>string</code> | The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath">SecretPath</a></code> | <code>string</code> | Path of the credential inside the secret backend configured on the runner. |

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Unique identifier of the Private Action Runner connection holding the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `UserUuid`<sup>Required</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid"></a>

```csharp
public string UserUuid { get; set; }
```

- *Type:* string

Unique identifier of the user the Private Action Runner connection belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `SecretPath`<sup>Optional</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath"></a>

```csharp
public string SecretPath { get; set; }
```

- *Type:* string

Path of the credential inside the secret backend configured on the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IntegrationDatabricksAccountAuthentication Authentication,
    string Name,
    IntegrationDatabricksAccountSettings Settings,
    IntegrationDatabricksAccountDataflows Dataflows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | Authentication configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">Name</a></code> | <code>string</code> | Human-readable name of the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | Settings configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | Data Datadog collects from Databricks, keyed by dataflow id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication"></a>

```csharp
public IntegrationDatabricksAccountAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

Authentication configured on the Databricks integration account.

A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#authentication IntegrationDatabricksAccount#authentication}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Human-readable name of the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings"></a>

```csharp
public IntegrationDatabricksAccountSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

Settings configured on the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `Dataflows`<sup>Optional</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows"></a>

```csharp
public IntegrationDatabricksAccountDataflows Dataflows { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

Data Datadog collects from Databricks, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dataflows IntegrationDatabricksAccount#dataflows}

---

### IntegrationDatabricksAccountDataflows <a name="IntegrationDatabricksAccountDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflows {
    IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics DatabricksCloudCostMetrics = null,
    IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring DatabricksDataObservabilityJobsMonitoring = null,
    IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring DatabricksDataObservabilityQualityMonitoring = null,
    IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics DatabricksModelServingMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics">DatabricksCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring">DatabricksDataObservabilityJobsMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring">DatabricksDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics">DatabricksModelServingMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | Health and usage metrics for your Databricks model serving endpoints. |

---

##### `DatabricksCloudCostMetrics`<sup>Optional</sup> <a name="DatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics DatabricksCloudCostMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_cloud_cost_metrics IntegrationDatabricksAccount#databricks_cloud_cost_metrics}

---

##### `DatabricksDataObservabilityJobsMonitoring`<sup>Optional</sup> <a name="DatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring DatabricksDataObservabilityJobsMonitoring { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_jobs_monitoring IntegrationDatabricksAccount#databricks_data_observability_jobs_monitoring}

---

##### `DatabricksDataObservabilityQualityMonitoring`<sup>Optional</sup> <a name="DatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring DatabricksDataObservabilityQualityMonitoring { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_quality_monitoring IntegrationDatabricksAccount#databricks_data_observability_quality_monitoring}

---

##### `DatabricksModelServingMetrics`<sup>Optional</sup> <a name="DatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics DatabricksModelServingMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

Health and usage metrics for your Databricks model serving endpoints.

Not supported on accounts that authenticate with `private_action_runner`; on those accounts this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_model_serving_metrics IntegrationDatabricksAccount#databricks_model_serving_metrics}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics {
    bool|IResolvable Enabled = null,
    IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings {
    bool|IResolvable CcmCollectAllWorkspaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces">CcmCollectAllWorkspaces</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether cost data is collected for every workspace in the Databricks account rather than this workspace only. |

---

##### `CcmCollectAllWorkspaces`<sup>Optional</sup> <a name="CcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces"></a>

```csharp
public bool|IResolvable CcmCollectAllWorkspaces { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.

This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#ccm_collect_all_workspaces IntegrationDatabricksAccount#ccm_collect_all_workspaces}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring {
    bool|IResolvable Enabled = null,
    IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | Settings of the Data Jobs Monitoring dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

Settings of the Data Jobs Monitoring dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings {
    string DdApiKeyId = null,
    string DdApiKeySecretWo = null,
    string DdApiKeySecretWoVersion = null,
    bool|IResolvable DjmGlobalInitScriptEnabled = null,
    bool|IResolvable ScriptGpumEnabled = null,
    bool|IResolvable ScriptLogsEnabled = null,
    bool|IResolvable ServerlessJobsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId">DdApiKeyId</a></code> | <code>string</code> | ID of the Datadog API key the global init script uses to submit data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo">DdApiKeySecretWo</a></code> | <code>string</code> | Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion">DdApiKeySecretWoVersion</a></code> | <code>string</code> | Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether GPU metrics are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether driver and worker logs are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. |

---

##### `DdApiKeyId`<sup>Optional</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId"></a>

```csharp
public string DdApiKeyId { get; set; }
```

- *Type:* string

ID of the Datadog API key the global init script uses to submit data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `DdApiKeySecretWo`<sup>Optional</sup> <a name="DdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo"></a>

```csharp
public string DdApiKeySecretWo { get; set; }
```

- *Type:* string

Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo IntegrationDatabricksAccount#dd_api_key_secret_wo}

---

##### `DdApiKeySecretWoVersion`<sup>Optional</sup> <a name="DdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion"></a>

```csharp
public string DdApiKeySecretWoVersion { get; set; }
```

- *Type:* string

Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo_version IntegrationDatabricksAccount#dd_api_key_secret_wo_version}

---

##### `DjmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled"></a>

```csharp
public bool|IResolvable DjmGlobalInitScriptEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script.

The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `ScriptGpumEnabled`<sup>Optional</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled"></a>

```csharp
public bool|IResolvable ScriptGpumEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether GPU metrics are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `ScriptLogsEnabled`<sup>Optional</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled"></a>

```csharp
public bool|IResolvable ScriptLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether driver and worker logs are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `ServerlessJobsEnabled`<sup>Optional</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled"></a>

```csharp
public bool|IResolvable ServerlessJobsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute.

This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring {
    bool|IResolvable Enabled = null,
    IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings {
    string DoCrawlersCron = null,
    bool|IResolvable SyncSystemCatalog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>string</code> | Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog">SyncSystemCatalog</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs. |

---

##### `DoCrawlersCron`<sup>Optional</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron"></a>

```csharp
public string DoCrawlersCron { get; set; }
```

- *Type:* string

Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata.

Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `SyncSystemCatalog`<sup>Optional</sup> <a name="SyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog"></a>

```csharp
public bool|IResolvable SyncSystemCatalog { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#sync_system_catalog IntegrationDatabricksAccount#sync_system_catalog}

---

### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

### IntegrationDatabricksAccountSettings <a name="IntegrationDatabricksAccountSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountSettings {
    string WorkspaceUrl,
    string SystemTablesSqlWarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | URL of the Databricks workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>string</code> | ID of the SQL warehouse used to query the Databricks system tables. |

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; set; }
```

- *Type:* string

URL of the Databricks workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `SystemTablesSqlWarehouseId`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId"></a>

```csharp
public string SystemTablesSqlWarehouseId { get; set; }
```

- *Type:* string

ID of the SQL warehouse used to query the Databricks system tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo">ResetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion">ResetTokenWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetTokenWo` <a name="ResetTokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo"></a>

```csharp
private void ResetTokenWo()
```

##### `ResetTokenWoVersion` <a name="ResetTokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion"></a>

```csharp
private void ResetTokenWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput">TokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput">TokenWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo">TokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion">TokenWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `TokenWoInput`<sup>Optional</sup> <a name="TokenWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput"></a>

```csharp
public string TokenWoInput { get; }
```

- *Type:* string

---

##### `TokenWoVersionInput`<sup>Optional</sup> <a name="TokenWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput"></a>

```csharp
public string TokenWoVersionInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### ~~`TokenWo`~~<sup>Required</sup> <a name="TokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string TokenWo { get; }
```

- *Type:* string

---

##### `TokenWoVersion`<sup>Required</sup> <a name="TokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion"></a>

```csharp
public string TokenWoVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput"></a>

```csharp
public string ClientSecretWoVersionInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion"></a>

```csharp
public string ClientSecretWoVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath">ResetSecretPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetSecretPath` <a name="ResetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath"></a>

```csharp
private void ResetSecretPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput">SecretPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput">UserUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath">SecretPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid">UserUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `SecretPathInput`<sup>Optional</sup> <a name="SecretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput"></a>

```csharp
public string SecretPathInput { get; }
```

- *Type:* string

---

##### `UserUuidInput`<sup>Optional</sup> <a name="UserUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput"></a>

```csharp
public string UserUuidInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `SecretPath`<sup>Required</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath"></a>

```csharp
public string SecretPath { get; }
```

- *Type:* string

---

##### `UserUuid`<sup>Required</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid"></a>

```csharp
public string UserUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---


### IntegrationDatabricksAccountAuthenticationOutputReference <a name="IntegrationDatabricksAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth">PutDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth">PutDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth">PutDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth">ResetDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth">ResetDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth">ResetDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabricksIntegrationAccountBearerTokenAuth` <a name="PutDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth"></a>

```csharp
private void PutDatabricksIntegrationAccountBearerTokenAuth(IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---

##### `PutDatabricksIntegrationAccountOAuthAuth` <a name="PutDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth"></a>

```csharp
private void PutDatabricksIntegrationAccountOAuthAuth(IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---

##### `PutDatabricksIntegrationAccountPrivateActionRunnerAuth` <a name="PutDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```csharp
private void PutDatabricksIntegrationAccountPrivateActionRunnerAuth(IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---

##### `ResetDatabricksIntegrationAccountBearerTokenAuth` <a name="ResetDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth"></a>

```csharp
private void ResetDatabricksIntegrationAccountBearerTokenAuth()
```

##### `ResetDatabricksIntegrationAccountOAuthAuth` <a name="ResetDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth"></a>

```csharp
private void ResetDatabricksIntegrationAccountOAuthAuth()
```

##### `ResetDatabricksIntegrationAccountPrivateActionRunnerAuth` <a name="ResetDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```csharp
private void ResetDatabricksIntegrationAccountPrivateActionRunnerAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth">DatabricksIntegrationAccountBearerTokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth">DatabricksIntegrationAccountOAuthAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth">DatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput">DatabricksIntegrationAccountBearerTokenAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput">DatabricksIntegrationAccountOAuthAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput">DatabricksIntegrationAccountPrivateActionRunnerAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabricksIntegrationAccountBearerTokenAuth`<sup>Required</sup> <a name="DatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference DatabricksIntegrationAccountBearerTokenAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a>

---

##### `DatabricksIntegrationAccountOAuthAuth`<sup>Required</sup> <a name="DatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference DatabricksIntegrationAccountOAuthAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a>

---

##### `DatabricksIntegrationAccountPrivateActionRunnerAuth`<sup>Required</sup> <a name="DatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```csharp
public IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference DatabricksIntegrationAccountPrivateActionRunnerAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a>

---

##### `DatabricksIntegrationAccountBearerTokenAuthInput`<sup>Optional</sup> <a name="DatabricksIntegrationAccountBearerTokenAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth DatabricksIntegrationAccountBearerTokenAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---

##### `DatabricksIntegrationAccountOAuthAuthInput`<sup>Optional</sup> <a name="DatabricksIntegrationAccountOAuthAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth DatabricksIntegrationAccountOAuthAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---

##### `DatabricksIntegrationAccountPrivateActionRunnerAuthInput`<sup>Optional</sup> <a name="DatabricksIntegrationAccountPrivateActionRunnerAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth DatabricksIntegrationAccountPrivateActionRunnerAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces">ResetCcmCollectAllWorkspaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCcmCollectAllWorkspaces` <a name="ResetCcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces"></a>

```csharp
private void ResetCcmCollectAllWorkspaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput">CcmCollectAllWorkspacesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces">CcmCollectAllWorkspaces</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CcmCollectAllWorkspacesInput`<sup>Optional</sup> <a name="CcmCollectAllWorkspacesInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput"></a>

```csharp
public bool|IResolvable CcmCollectAllWorkspacesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CcmCollectAllWorkspaces`<sup>Required</sup> <a name="CcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces"></a>

```csharp
public bool|IResolvable CcmCollectAllWorkspaces { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId">ResetDdApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo">ResetDdApiKeySecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion">ResetDdApiKeySecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled">ResetDjmGlobalInitScriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled">ResetScriptGpumEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled">ResetScriptLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled">ResetServerlessJobsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDdApiKeyId` <a name="ResetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId"></a>

```csharp
private void ResetDdApiKeyId()
```

##### `ResetDdApiKeySecretWo` <a name="ResetDdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo"></a>

```csharp
private void ResetDdApiKeySecretWo()
```

##### `ResetDdApiKeySecretWoVersion` <a name="ResetDdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion"></a>

```csharp
private void ResetDdApiKeySecretWoVersion()
```

##### `ResetDjmGlobalInitScriptEnabled` <a name="ResetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled"></a>

```csharp
private void ResetDjmGlobalInitScriptEnabled()
```

##### `ResetScriptGpumEnabled` <a name="ResetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled"></a>

```csharp
private void ResetScriptGpumEnabled()
```

##### `ResetScriptLogsEnabled` <a name="ResetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled"></a>

```csharp
private void ResetScriptLogsEnabled()
```

##### `ResetServerlessJobsEnabled` <a name="ResetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled"></a>

```csharp
private void ResetServerlessJobsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput">DdApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput">DdApiKeySecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput">DdApiKeySecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput">DjmGlobalInitScriptEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput">ScriptGpumEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput">ScriptLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput">ServerlessJobsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId">DdApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo">DdApiKeySecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion">DdApiKeySecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DdApiKeyIdInput`<sup>Optional</sup> <a name="DdApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput"></a>

```csharp
public string DdApiKeyIdInput { get; }
```

- *Type:* string

---

##### `DdApiKeySecretWoInput`<sup>Optional</sup> <a name="DdApiKeySecretWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput"></a>

```csharp
public string DdApiKeySecretWoInput { get; }
```

- *Type:* string

---

##### `DdApiKeySecretWoVersionInput`<sup>Optional</sup> <a name="DdApiKeySecretWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput"></a>

```csharp
public string DdApiKeySecretWoVersionInput { get; }
```

- *Type:* string

---

##### `DjmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput"></a>

```csharp
public bool|IResolvable DjmGlobalInitScriptEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScriptGpumEnabledInput`<sup>Optional</sup> <a name="ScriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput"></a>

```csharp
public bool|IResolvable ScriptGpumEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScriptLogsEnabledInput`<sup>Optional</sup> <a name="ScriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput"></a>

```csharp
public bool|IResolvable ScriptLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerlessJobsEnabledInput`<sup>Optional</sup> <a name="ServerlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput"></a>

```csharp
public bool|IResolvable ServerlessJobsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DdApiKeyId`<sup>Required</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId"></a>

```csharp
public string DdApiKeyId { get; }
```

- *Type:* string

---

##### ~~`DdApiKeySecretWo`~~<sup>Required</sup> <a name="DdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string DdApiKeySecretWo { get; }
```

- *Type:* string

---

##### `DdApiKeySecretWoVersion`<sup>Required</sup> <a name="DdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion"></a>

```csharp
public string DdApiKeySecretWoVersion { get; }
```

- *Type:* string

---

##### `DjmGlobalInitScriptEnabled`<sup>Required</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled"></a>

```csharp
public bool|IResolvable DjmGlobalInitScriptEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScriptGpumEnabled`<sup>Required</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled"></a>

```csharp
public bool|IResolvable ScriptGpumEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScriptLogsEnabled`<sup>Required</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled"></a>

```csharp
public bool|IResolvable ScriptLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerlessJobsEnabled`<sup>Required</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled"></a>

```csharp
public bool|IResolvable ServerlessJobsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron">ResetDoCrawlersCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog">ResetSyncSystemCatalog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoCrawlersCron` <a name="ResetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron"></a>

```csharp
private void ResetDoCrawlersCron()
```

##### `ResetSyncSystemCatalog` <a name="ResetSyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog"></a>

```csharp
private void ResetSyncSystemCatalog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput">DoCrawlersCronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput">SyncSystemCatalogInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog">SyncSystemCatalog</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DoCrawlersCronInput`<sup>Optional</sup> <a name="DoCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput"></a>

```csharp
public string DoCrawlersCronInput { get; }
```

- *Type:* string

---

##### `SyncSystemCatalogInput`<sup>Optional</sup> <a name="SyncSystemCatalogInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput"></a>

```csharp
public bool|IResolvable SyncSystemCatalogInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoCrawlersCron`<sup>Required</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron"></a>

```csharp
public string DoCrawlersCron { get; }
```

- *Type:* string

---

##### `SyncSystemCatalog`<sup>Required</sup> <a name="SyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog"></a>

```csharp
public bool|IResolvable SyncSystemCatalog { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---


### IntegrationDatabricksAccountDataflowsOutputReference <a name="IntegrationDatabricksAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountDataflowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics">PutDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring">PutDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring">PutDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics">PutDatabricksModelServingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics">ResetDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring">ResetDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring">ResetDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics">ResetDatabricksModelServingMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabricksCloudCostMetrics` <a name="PutDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics"></a>

```csharp
private void PutDatabricksCloudCostMetrics(IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---

##### `PutDatabricksDataObservabilityJobsMonitoring` <a name="PutDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring"></a>

```csharp
private void PutDatabricksDataObservabilityJobsMonitoring(IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---

##### `PutDatabricksDataObservabilityQualityMonitoring` <a name="PutDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring"></a>

```csharp
private void PutDatabricksDataObservabilityQualityMonitoring(IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---

##### `PutDatabricksModelServingMetrics` <a name="PutDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics"></a>

```csharp
private void PutDatabricksModelServingMetrics(IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---

##### `ResetDatabricksCloudCostMetrics` <a name="ResetDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics"></a>

```csharp
private void ResetDatabricksCloudCostMetrics()
```

##### `ResetDatabricksDataObservabilityJobsMonitoring` <a name="ResetDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring"></a>

```csharp
private void ResetDatabricksDataObservabilityJobsMonitoring()
```

##### `ResetDatabricksDataObservabilityQualityMonitoring` <a name="ResetDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring"></a>

```csharp
private void ResetDatabricksDataObservabilityQualityMonitoring()
```

##### `ResetDatabricksModelServingMetrics` <a name="ResetDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics"></a>

```csharp
private void ResetDatabricksModelServingMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics">DatabricksCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring">DatabricksDataObservabilityJobsMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring">DatabricksDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics">DatabricksModelServingMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput">DatabricksCloudCostMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput">DatabricksDataObservabilityJobsMonitoringInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput">DatabricksDataObservabilityQualityMonitoringInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput">DatabricksModelServingMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabricksCloudCostMetrics`<sup>Required</sup> <a name="DatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference DatabricksCloudCostMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a>

---

##### `DatabricksDataObservabilityJobsMonitoring`<sup>Required</sup> <a name="DatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference DatabricksDataObservabilityJobsMonitoring { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a>

---

##### `DatabricksDataObservabilityQualityMonitoring`<sup>Required</sup> <a name="DatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference DatabricksDataObservabilityQualityMonitoring { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a>

---

##### `DatabricksModelServingMetrics`<sup>Required</sup> <a name="DatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics"></a>

```csharp
public IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference DatabricksModelServingMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a>

---

##### `DatabricksCloudCostMetricsInput`<sup>Optional</sup> <a name="DatabricksCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics DatabricksCloudCostMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---

##### `DatabricksDataObservabilityJobsMonitoringInput`<sup>Optional</sup> <a name="DatabricksDataObservabilityJobsMonitoringInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring DatabricksDataObservabilityJobsMonitoringInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---

##### `DatabricksDataObservabilityQualityMonitoringInput`<sup>Optional</sup> <a name="DatabricksDataObservabilityQualityMonitoringInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring DatabricksDataObservabilityQualityMonitoringInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---

##### `DatabricksModelServingMetricsInput`<sup>Optional</sup> <a name="DatabricksModelServingMetricsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics DatabricksModelServingMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountDataflows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---


### IntegrationDatabricksAccountSettingsOutputReference <a name="IntegrationDatabricksAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId">ResetSystemTablesSqlWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemTablesSqlWarehouseId` <a name="ResetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId"></a>

```csharp
private void ResetSystemTablesSqlWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput">SystemTablesSqlWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput"></a>

```csharp
public string SystemTablesSqlWarehouseIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput"></a>

```csharp
public string WorkspaceUrlInput { get; }
```

- *Type:* string

---

##### `SystemTablesSqlWarehouseId`<sup>Required</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId"></a>

```csharp
public string SystemTablesSqlWarehouseId { get; }
```

- *Type:* string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---



