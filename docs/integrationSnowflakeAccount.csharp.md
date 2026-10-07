# `integrationSnowflakeAccount` Submodule <a name="`integrationSnowflakeAccount` Submodule" id="@cdktn/provider-datadog.integrationSnowflakeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSnowflakeAccount <a name="IntegrationSnowflakeAccount" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account datadog_integration_snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccount(Construct Scope, string Id, IntegrationSnowflakeAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig">IntegrationSnowflakeAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig">IntegrationSnowflakeAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows">PutDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows">ResetDataflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication"></a>

```csharp
private void PutAuthentication(IntegrationSnowflakeAccountAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `PutDataflows` <a name="PutDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows"></a>

```csharp
private void PutDataflows(IntegrationSnowflakeAccountDataflows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `ResetDataflows` <a name="ResetDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows"></a>

```csharp
private void ResetDataflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationSnowflakeAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationSnowflakeAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationSnowflakeAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationSnowflakeAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationSnowflakeAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationSnowflakeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationSnowflakeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput">AuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput">DataflowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication"></a>

```csharp
public IntegrationSnowflakeAccountAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a>

---

##### `Dataflows`<sup>Required</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsOutputReference Dataflows { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountAuthentication AuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `DataflowsInput`<sup>Optional</sup> <a name="DataflowsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflows DataflowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSnowflakeAccountAuthentication <a name="IntegrationSnowflakeAccountAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountAuthentication {
    IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth SnowflakeIntegrationAccountPrivateKeyAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth">SnowflakeIntegrationAccountPrivateKeyAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | The RSA key pair authentication method configured on the account. |

---

##### `SnowflakeIntegrationAccountPrivateKeyAuth`<sup>Optional</sup> <a name="SnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```csharp
public IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth SnowflakeIntegrationAccountPrivateKeyAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

The RSA key pair authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_integration_account_private_key_auth IntegrationSnowflakeAccount#snowflake_integration_account_private_key_auth}

---

### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth {
    string PrivateKeyName,
    string PrivateKeyWo,
    string PrivateKeyWoVersion,
    string AuthType = null,
    string PrivateKeyPassphraseWo = null,
    string PrivateKeyPassphraseWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName">PrivateKeyName</a></code> | <code>string</code> | Name that distinguishes this private key from other keys in Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo">PrivateKeyWo</a></code> | <code>string</code> | The private key, in PEM format. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion">PrivateKeyWoVersion</a></code> | <code>string</code> | Version trigger for private_key_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType">AuthType</a></code> | <code>string</code> | The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo">PrivateKeyPassphraseWo</a></code> | <code>string</code> | Passphrase that decrypts the private key. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion">PrivateKeyPassphraseWoVersion</a></code> | <code>string</code> | Version trigger for private_key_passphrase_wo rotation. String length must be at least 1. |

---

##### `PrivateKeyName`<sup>Required</sup> <a name="PrivateKeyName" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName"></a>

```csharp
public string PrivateKeyName { get; set; }
```

- *Type:* string

Name that distinguishes this private key from other keys in Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_name IntegrationSnowflakeAccount#private_key_name}

---

##### `PrivateKeyWo`<sup>Required</sup> <a name="PrivateKeyWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo"></a>

```csharp
public string PrivateKeyWo { get; set; }
```

- *Type:* string

The private key, in PEM format. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo IntegrationSnowflakeAccount#private_key_wo}

---

##### `PrivateKeyWoVersion`<sup>Required</sup> <a name="PrivateKeyWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion"></a>

```csharp
public string PrivateKeyWoVersion { get; set; }
```

- *Type:* string

Version trigger for private_key_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo_version IntegrationSnowflakeAccount#private_key_wo_version}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#auth_type IntegrationSnowflakeAccount#auth_type}

---

##### `PrivateKeyPassphraseWo`<sup>Optional</sup> <a name="PrivateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo"></a>

```csharp
public string PrivateKeyPassphraseWo { get; set; }
```

- *Type:* string

Passphrase that decrypts the private key.

Provide it only when the key is encrypted. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo IntegrationSnowflakeAccount#private_key_passphrase_wo}

---

##### `PrivateKeyPassphraseWoVersion`<sup>Optional</sup> <a name="PrivateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion"></a>

```csharp
public string PrivateKeyPassphraseWoVersion { get; set; }
```

- *Type:* string

Version trigger for private_key_passphrase_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo_version IntegrationSnowflakeAccount#private_key_passphrase_wo_version}

---

### IntegrationSnowflakeAccountConfig <a name="IntegrationSnowflakeAccountConfig" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IntegrationSnowflakeAccountAuthentication Authentication,
    string Name,
    IntegrationSnowflakeAccountSettings Settings,
    IntegrationSnowflakeAccountDataflows Dataflows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | Authentication configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name">Name</a></code> | <code>string</code> | Human-readable name of the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | Settings configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | Data Datadog collects from Snowflake, keyed by dataflow id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication"></a>

```csharp
public IntegrationSnowflakeAccountAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

Authentication configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Human-readable name of the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

Settings configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `Dataflows`<sup>Optional</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows"></a>

```csharp
public IntegrationSnowflakeAccountDataflows Dataflows { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

Data Datadog collects from Snowflake, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}

---

### IntegrationSnowflakeAccountDataflows <a name="IntegrationSnowflakeAccountDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflows {
    IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics SnowflakeAccountUsageMetrics = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics SnowflakeCloudCostMetrics = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring SnowflakeDataObservabilityQualityMonitoring = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs SnowflakeEventTableLogs = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics SnowflakeOrganizationUsageMetrics = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs SnowflakeQueryHistoryLogs = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs SnowflakeSecurityLogs = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs SnowflakeTaskHistoryLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics">SnowflakeAccountUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics">SnowflakeCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring">SnowflakeDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs">SnowflakeEventTableLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | Records from your Snowflake event tables, used to monitor application behavior and identify issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics">SnowflakeOrganizationUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs">SnowflakeQueryHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | Per-query logs that let you identify long-running, poorly performing, and expensive queries. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs">SnowflakeSecurityLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/). |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs">SnowflakeTaskHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message. |

---

##### `SnowflakeAccountUsageMetrics`<sup>Optional</sup> <a name="SnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics SnowflakeAccountUsageMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_usage_metrics IntegrationSnowflakeAccount#snowflake_account_usage_metrics}

---

##### `SnowflakeCloudCostMetrics`<sup>Optional</sup> <a name="SnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics SnowflakeCloudCostMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema.

Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role; without both this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_cloud_cost_metrics IntegrationSnowflakeAccount#snowflake_cloud_cost_metrics}

---

##### `SnowflakeDataObservabilityQualityMonitoring`<sup>Optional</sup> <a name="SnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring SnowflakeDataObservabilityQualityMonitoring { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_data_observability_quality_monitoring IntegrationSnowflakeAccount#snowflake_data_observability_quality_monitoring}

---

##### `SnowflakeEventTableLogs`<sup>Optional</sup> <a name="SnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs SnowflakeEventTableLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

Records from your Snowflake event tables, used to monitor application behavior and identify issues.

`enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself; without those grants this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_event_table_logs IntegrationSnowflakeAccount#snowflake_event_table_logs}

---

##### `SnowflakeOrganizationUsageMetrics`<sup>Optional</sup> <a name="SnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics SnowflakeOrganizationUsageMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake.

Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_organization_usage_metrics IntegrationSnowflakeAccount#snowflake_organization_usage_metrics}

---

##### `SnowflakeQueryHistoryLogs`<sup>Optional</sup> <a name="SnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs SnowflakeQueryHistoryLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

Per-query logs that let you identify long-running, poorly performing, and expensive queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_query_history_logs IntegrationSnowflakeAccount#snowflake_query_history_logs}

---

##### `SnowflakeSecurityLogs`<sup>Optional</sup> <a name="SnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs SnowflakeSecurityLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_security_logs IntegrationSnowflakeAccount#snowflake_security_logs}

---

##### `SnowflakeTaskHistoryLogs`<sup>Optional</sup> <a name="SnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs SnowflakeTaskHistoryLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_task_history_logs IntegrationSnowflakeAccount#snowflake_task_history_logs}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | Settings of the account usage metrics dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

Settings of the account usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings {
    bool|IResolvable AccountUsageMetricsAggregateLast24H = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H">AccountUsageMetricsAggregateLast24H</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `AccountUsageMetricsAggregateLast24H`<sup>Optional</sup> <a name="AccountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H"></a>

```csharp
public bool|IResolvable AccountUsageMetricsAggregateLast24H { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#account_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#account_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings {
    string QueryTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags">QueryTags</a></code> | <code>string</code> | Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management. |

---

##### `QueryTags`<sup>Optional</sup> <a name="QueryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags"></a>

```csharp
public string QueryTags { get; set; }
```

- *Type:* string

Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_tags IntegrationSnowflakeAccount#query_tags}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings {
    string DoTableCrawlerCron = null,
    bool|IResolvable SyncSnowflakeSystemDatabase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron">DoTableCrawlerCron</a></code> | <code>string</code> | Cron expression setting how often Datadog crawls your Snowflake table metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase">SyncSnowflakeSystemDatabase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases. |

---

##### `DoTableCrawlerCron`<sup>Optional</sup> <a name="DoTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron"></a>

```csharp
public string DoTableCrawlerCron { get; set; }
```

- *Type:* string

Cron expression setting how often Datadog crawls your Snowflake table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#do_table_crawler_cron IntegrationSnowflakeAccount#do_table_crawler_cron}

---

##### `SyncSnowflakeSystemDatabase`<sup>Optional</sup> <a name="SyncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase"></a>

```csharp
public bool|IResolvable SyncSnowflakeSystemDatabase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#sync_snowflake_system_database IntegrationSnowflakeAccount#sync_snowflake_system_database}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | Settings of the event table dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

Settings of the event table dataflow.

Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings {
    bool|IResolvable EventTableEventsEnabled = null,
    bool|IResolvable EventTableLogsEnabled = null,
    double EventTableLogsIntervalMin = null,
    bool|IResolvable EventTableSpanEventsEnabled = null,
    bool|IResolvable EventTableSpansEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled">EventTableEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether records with a `record_type` of `event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled">EventTableLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether records with a `record_type` of `log` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin">EventTableLogsIntervalMin</a></code> | <code>double</code> | How often event table records are collected, in minutes. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled">EventTableSpanEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether records with a `record_type` of `span_event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled">EventTableSpansEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether records with a `record_type` of `span` are collected. |

---

##### `EventTableEventsEnabled`<sup>Optional</sup> <a name="EventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled"></a>

```csharp
public bool|IResolvable EventTableEventsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether records with a `record_type` of `event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_events_enabled IntegrationSnowflakeAccount#event_table_events_enabled}

---

##### `EventTableLogsEnabled`<sup>Optional</sup> <a name="EventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled"></a>

```csharp
public bool|IResolvable EventTableLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether records with a `record_type` of `log` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_enabled IntegrationSnowflakeAccount#event_table_logs_enabled}

---

##### `EventTableLogsIntervalMin`<sup>Optional</sup> <a name="EventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin"></a>

```csharp
public double EventTableLogsIntervalMin { get; set; }
```

- *Type:* double

How often event table records are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_interval_min IntegrationSnowflakeAccount#event_table_logs_interval_min}

---

##### `EventTableSpanEventsEnabled`<sup>Optional</sup> <a name="EventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled"></a>

```csharp
public bool|IResolvable EventTableSpanEventsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether records with a `record_type` of `span_event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_span_events_enabled IntegrationSnowflakeAccount#event_table_span_events_enabled}

---

##### `EventTableSpansEnabled`<sup>Optional</sup> <a name="EventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled"></a>

```csharp
public bool|IResolvable EventTableSpansEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether records with a `record_type` of `span` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_spans_enabled IntegrationSnowflakeAccount#event_table_spans_enabled}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | Settings of the organization usage metrics dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

Settings of the organization usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings {
    bool|IResolvable OrganizationUsageMetricsAggregateLast24H = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H">OrganizationUsageMetricsAggregateLast24H</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `OrganizationUsageMetricsAggregateLast24H`<sup>Optional</sup> <a name="OrganizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H"></a>

```csharp
public bool|IResolvable OrganizationUsageMetricsAggregateLast24H { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#organization_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#organization_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | Settings of the query history logs dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

Settings of the query history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings {
    bool|IResolvable JoinQueryHistoryWithAccessHistoryEnabled = null,
    double QueryHistoryLogsIntervalMin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled">JoinQueryHistoryWithAccessHistoryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin">QueryHistoryLogsIntervalMin</a></code> | <code>double</code> | How often query history logs are collected, in minutes. |

---

##### `JoinQueryHistoryWithAccessHistoryEnabled`<sup>Optional</sup> <a name="JoinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```csharp
public bool|IResolvable JoinQueryHistoryWithAccessHistoryEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#join_query_history_with_access_history_enabled IntegrationSnowflakeAccount#join_query_history_with_access_history_enabled}

---

##### `QueryHistoryLogsIntervalMin`<sup>Optional</sup> <a name="QueryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin"></a>

```csharp
public double QueryHistoryLogsIntervalMin { get; set; }
```

- *Type:* double

How often query history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_history_logs_interval_min IntegrationSnowflakeAccount#query_history_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | Settings of the security logs dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

Settings of the security logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings {
    double SecurityLogsIntervalMin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin">SecurityLogsIntervalMin</a></code> | <code>double</code> | How often security logs are collected, in minutes. |

---

##### `SecurityLogsIntervalMin`<sup>Optional</sup> <a name="SecurityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin"></a>

```csharp
public double SecurityLogsIntervalMin { get; set; }
```

- *Type:* double

How often security logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#security_logs_interval_min IntegrationSnowflakeAccount#security_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs {
    bool|IResolvable Enabled = null,
    IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | Settings of the task history logs dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

Settings of the task history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings {
    double TaskHistoryLogsIntervalMin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin">TaskHistoryLogsIntervalMin</a></code> | <code>double</code> | How often task history logs are collected, in minutes. |

---

##### `TaskHistoryLogsIntervalMin`<sup>Optional</sup> <a name="TaskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin"></a>

```csharp
public double TaskHistoryLogsIntervalMin { get; set; }
```

- *Type:* double

How often task history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#task_history_logs_interval_min IntegrationSnowflakeAccount#task_history_logs_interval_min}

---

### IntegrationSnowflakeAccountSettings <a name="IntegrationSnowflakeAccountSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountSettings {
    string SnowflakeAccountIdentifier,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier">SnowflakeAccountIdentifier</a></code> | <code>string</code> | Identifier of the Snowflake account being monitored. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username">Username</a></code> | <code>string</code> | Snowflake user Datadog authenticates as. |

---

##### `SnowflakeAccountIdentifier`<sup>Required</sup> <a name="SnowflakeAccountIdentifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier"></a>

```csharp
public string SnowflakeAccountIdentifier { get; set; }
```

- *Type:* string

Identifier of the Snowflake account being monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_identifier IntegrationSnowflakeAccount#snowflake_account_identifier}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Snowflake user Datadog authenticates as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#username IntegrationSnowflakeAccount#username}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSnowflakeAccountAuthenticationOutputReference <a name="IntegrationSnowflakeAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth">PutSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth">ResetSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSnowflakeIntegrationAccountPrivateKeyAuth` <a name="PutSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```csharp
private void PutSnowflakeIntegrationAccountPrivateKeyAuth(IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `ResetSnowflakeIntegrationAccountPrivateKeyAuth` <a name="ResetSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```csharp
private void ResetSnowflakeIntegrationAccountPrivateKeyAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth">SnowflakeIntegrationAccountPrivateKeyAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput">SnowflakeIntegrationAccountPrivateKeyAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnowflakeIntegrationAccountPrivateKeyAuth`<sup>Required</sup> <a name="SnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```csharp
public IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference SnowflakeIntegrationAccountPrivateKeyAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a>

---

##### `SnowflakeIntegrationAccountPrivateKeyAuthInput`<sup>Optional</sup> <a name="SnowflakeIntegrationAccountPrivateKeyAuthInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth SnowflakeIntegrationAccountPrivateKeyAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---


### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo">ResetPrivateKeyPassphraseWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion">ResetPrivateKeyPassphraseWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetPrivateKeyPassphraseWo` <a name="ResetPrivateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo"></a>

```csharp
private void ResetPrivateKeyPassphraseWo()
```

##### `ResetPrivateKeyPassphraseWoVersion` <a name="ResetPrivateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion"></a>

```csharp
private void ResetPrivateKeyPassphraseWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput">PrivateKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput">PrivateKeyPassphraseWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput">PrivateKeyPassphraseWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput">PrivateKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput">PrivateKeyWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName">PrivateKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo">PrivateKeyPassphraseWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion">PrivateKeyPassphraseWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo">PrivateKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion">PrivateKeyWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `PrivateKeyNameInput`<sup>Optional</sup> <a name="PrivateKeyNameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput"></a>

```csharp
public string PrivateKeyNameInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseWoInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseWoInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput"></a>

```csharp
public string PrivateKeyPassphraseWoInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseWoVersionInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseWoVersionInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput"></a>

```csharp
public string PrivateKeyPassphraseWoVersionInput { get; }
```

- *Type:* string

---

##### `PrivateKeyWoInput`<sup>Optional</sup> <a name="PrivateKeyWoInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput"></a>

```csharp
public string PrivateKeyWoInput { get; }
```

- *Type:* string

---

##### `PrivateKeyWoVersionInput`<sup>Optional</sup> <a name="PrivateKeyWoVersionInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput"></a>

```csharp
public string PrivateKeyWoVersionInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `PrivateKeyName`<sup>Required</sup> <a name="PrivateKeyName" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName"></a>

```csharp
public string PrivateKeyName { get; }
```

- *Type:* string

---

##### ~~`PrivateKeyPassphraseWo`~~<sup>Required</sup> <a name="PrivateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string PrivateKeyPassphraseWo { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseWoVersion`<sup>Required</sup> <a name="PrivateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion"></a>

```csharp
public string PrivateKeyPassphraseWoVersion { get; }
```

- *Type:* string

---

##### ~~`PrivateKeyWo`~~<sup>Required</sup> <a name="PrivateKeyWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string PrivateKeyWo { get; }
```

- *Type:* string

---

##### `PrivateKeyWoVersion`<sup>Required</sup> <a name="PrivateKeyWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion"></a>

```csharp
public string PrivateKeyWoVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---


### IntegrationSnowflakeAccountDataflowsOutputReference <a name="IntegrationSnowflakeAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics">PutSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics">PutSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring">PutSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs">PutSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics">PutSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs">PutSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs">PutSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs">PutSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics">ResetSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics">ResetSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring">ResetSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs">ResetSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics">ResetSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs">ResetSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs">ResetSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs">ResetSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSnowflakeAccountUsageMetrics` <a name="PutSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics"></a>

```csharp
private void PutSnowflakeAccountUsageMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `PutSnowflakeCloudCostMetrics` <a name="PutSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics"></a>

```csharp
private void PutSnowflakeCloudCostMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `PutSnowflakeDataObservabilityQualityMonitoring` <a name="PutSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring"></a>

```csharp
private void PutSnowflakeDataObservabilityQualityMonitoring(IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `PutSnowflakeEventTableLogs` <a name="PutSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs"></a>

```csharp
private void PutSnowflakeEventTableLogs(IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `PutSnowflakeOrganizationUsageMetrics` <a name="PutSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics"></a>

```csharp
private void PutSnowflakeOrganizationUsageMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `PutSnowflakeQueryHistoryLogs` <a name="PutSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs"></a>

```csharp
private void PutSnowflakeQueryHistoryLogs(IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `PutSnowflakeSecurityLogs` <a name="PutSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs"></a>

```csharp
private void PutSnowflakeSecurityLogs(IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `PutSnowflakeTaskHistoryLogs` <a name="PutSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs"></a>

```csharp
private void PutSnowflakeTaskHistoryLogs(IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `ResetSnowflakeAccountUsageMetrics` <a name="ResetSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics"></a>

```csharp
private void ResetSnowflakeAccountUsageMetrics()
```

##### `ResetSnowflakeCloudCostMetrics` <a name="ResetSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics"></a>

```csharp
private void ResetSnowflakeCloudCostMetrics()
```

##### `ResetSnowflakeDataObservabilityQualityMonitoring` <a name="ResetSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring"></a>

```csharp
private void ResetSnowflakeDataObservabilityQualityMonitoring()
```

##### `ResetSnowflakeEventTableLogs` <a name="ResetSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs"></a>

```csharp
private void ResetSnowflakeEventTableLogs()
```

##### `ResetSnowflakeOrganizationUsageMetrics` <a name="ResetSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics"></a>

```csharp
private void ResetSnowflakeOrganizationUsageMetrics()
```

##### `ResetSnowflakeQueryHistoryLogs` <a name="ResetSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs"></a>

```csharp
private void ResetSnowflakeQueryHistoryLogs()
```

##### `ResetSnowflakeSecurityLogs` <a name="ResetSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs"></a>

```csharp
private void ResetSnowflakeSecurityLogs()
```

##### `ResetSnowflakeTaskHistoryLogs` <a name="ResetSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs"></a>

```csharp
private void ResetSnowflakeTaskHistoryLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics">SnowflakeAccountUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics">SnowflakeCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring">SnowflakeDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs">SnowflakeEventTableLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics">SnowflakeOrganizationUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs">SnowflakeQueryHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs">SnowflakeSecurityLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs">SnowflakeTaskHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput">SnowflakeAccountUsageMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput">SnowflakeCloudCostMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput">SnowflakeDataObservabilityQualityMonitoringInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput">SnowflakeEventTableLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput">SnowflakeOrganizationUsageMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput">SnowflakeQueryHistoryLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput">SnowflakeSecurityLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput">SnowflakeTaskHistoryLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnowflakeAccountUsageMetrics`<sup>Required</sup> <a name="SnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference SnowflakeAccountUsageMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a>

---

##### `SnowflakeCloudCostMetrics`<sup>Required</sup> <a name="SnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference SnowflakeCloudCostMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a>

---

##### `SnowflakeDataObservabilityQualityMonitoring`<sup>Required</sup> <a name="SnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference SnowflakeDataObservabilityQualityMonitoring { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a>

---

##### `SnowflakeEventTableLogs`<sup>Required</sup> <a name="SnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference SnowflakeEventTableLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a>

---

##### `SnowflakeOrganizationUsageMetrics`<sup>Required</sup> <a name="SnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference SnowflakeOrganizationUsageMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a>

---

##### `SnowflakeQueryHistoryLogs`<sup>Required</sup> <a name="SnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference SnowflakeQueryHistoryLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a>

---

##### `SnowflakeSecurityLogs`<sup>Required</sup> <a name="SnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference SnowflakeSecurityLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a>

---

##### `SnowflakeTaskHistoryLogs`<sup>Required</sup> <a name="SnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference SnowflakeTaskHistoryLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a>

---

##### `SnowflakeAccountUsageMetricsInput`<sup>Optional</sup> <a name="SnowflakeAccountUsageMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics SnowflakeAccountUsageMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `SnowflakeCloudCostMetricsInput`<sup>Optional</sup> <a name="SnowflakeCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics SnowflakeCloudCostMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `SnowflakeDataObservabilityQualityMonitoringInput`<sup>Optional</sup> <a name="SnowflakeDataObservabilityQualityMonitoringInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring SnowflakeDataObservabilityQualityMonitoringInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `SnowflakeEventTableLogsInput`<sup>Optional</sup> <a name="SnowflakeEventTableLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs SnowflakeEventTableLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `SnowflakeOrganizationUsageMetricsInput`<sup>Optional</sup> <a name="SnowflakeOrganizationUsageMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics SnowflakeOrganizationUsageMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `SnowflakeQueryHistoryLogsInput`<sup>Optional</sup> <a name="SnowflakeQueryHistoryLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs SnowflakeQueryHistoryLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `SnowflakeSecurityLogsInput`<sup>Optional</sup> <a name="SnowflakeSecurityLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs SnowflakeSecurityLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `SnowflakeTaskHistoryLogsInput`<sup>Optional</sup> <a name="SnowflakeTaskHistoryLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs SnowflakeTaskHistoryLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H">ResetAccountUsageMetricsAggregateLast24H</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountUsageMetricsAggregateLast24H` <a name="ResetAccountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H"></a>

```csharp
private void ResetAccountUsageMetricsAggregateLast24H()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput">AccountUsageMetricsAggregateLast24HInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H">AccountUsageMetricsAggregateLast24H</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountUsageMetricsAggregateLast24HInput`<sup>Optional</sup> <a name="AccountUsageMetricsAggregateLast24HInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput"></a>

```csharp
public bool|IResolvable AccountUsageMetricsAggregateLast24HInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountUsageMetricsAggregateLast24H`<sup>Required</sup> <a name="AccountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H"></a>

```csharp
public bool|IResolvable AccountUsageMetricsAggregateLast24H { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags">ResetQueryTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryTags` <a name="ResetQueryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags"></a>

```csharp
private void ResetQueryTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput">QueryTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags">QueryTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryTagsInput`<sup>Optional</sup> <a name="QueryTagsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput"></a>

```csharp
public string QueryTagsInput { get; }
```

- *Type:* string

---

##### `QueryTags`<sup>Required</sup> <a name="QueryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags"></a>

```csharp
public string QueryTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron">ResetDoTableCrawlerCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase">ResetSyncSnowflakeSystemDatabase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoTableCrawlerCron` <a name="ResetDoTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron"></a>

```csharp
private void ResetDoTableCrawlerCron()
```

##### `ResetSyncSnowflakeSystemDatabase` <a name="ResetSyncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase"></a>

```csharp
private void ResetSyncSnowflakeSystemDatabase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput">DoTableCrawlerCronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput">SyncSnowflakeSystemDatabaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron">DoTableCrawlerCron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase">SyncSnowflakeSystemDatabase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DoTableCrawlerCronInput`<sup>Optional</sup> <a name="DoTableCrawlerCronInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput"></a>

```csharp
public string DoTableCrawlerCronInput { get; }
```

- *Type:* string

---

##### `SyncSnowflakeSystemDatabaseInput`<sup>Optional</sup> <a name="SyncSnowflakeSystemDatabaseInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput"></a>

```csharp
public bool|IResolvable SyncSnowflakeSystemDatabaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoTableCrawlerCron`<sup>Required</sup> <a name="DoTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron"></a>

```csharp
public string DoTableCrawlerCron { get; }
```

- *Type:* string

---

##### `SyncSnowflakeSystemDatabase`<sup>Required</sup> <a name="SyncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase"></a>

```csharp
public bool|IResolvable SyncSnowflakeSystemDatabase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled">ResetEventTableEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled">ResetEventTableLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin">ResetEventTableLogsIntervalMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled">ResetEventTableSpanEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled">ResetEventTableSpansEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventTableEventsEnabled` <a name="ResetEventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled"></a>

```csharp
private void ResetEventTableEventsEnabled()
```

##### `ResetEventTableLogsEnabled` <a name="ResetEventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled"></a>

```csharp
private void ResetEventTableLogsEnabled()
```

##### `ResetEventTableLogsIntervalMin` <a name="ResetEventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin"></a>

```csharp
private void ResetEventTableLogsIntervalMin()
```

##### `ResetEventTableSpanEventsEnabled` <a name="ResetEventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled"></a>

```csharp
private void ResetEventTableSpanEventsEnabled()
```

##### `ResetEventTableSpansEnabled` <a name="ResetEventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled"></a>

```csharp
private void ResetEventTableSpansEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput">EventTableEventsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput">EventTableLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput">EventTableLogsIntervalMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput">EventTableSpanEventsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput">EventTableSpansEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled">EventTableEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled">EventTableLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin">EventTableLogsIntervalMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled">EventTableSpanEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled">EventTableSpansEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTableEventsEnabledInput`<sup>Optional</sup> <a name="EventTableEventsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput"></a>

```csharp
public bool|IResolvable EventTableEventsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableLogsEnabledInput`<sup>Optional</sup> <a name="EventTableLogsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput"></a>

```csharp
public bool|IResolvable EventTableLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableLogsIntervalMinInput`<sup>Optional</sup> <a name="EventTableLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput"></a>

```csharp
public double EventTableLogsIntervalMinInput { get; }
```

- *Type:* double

---

##### `EventTableSpanEventsEnabledInput`<sup>Optional</sup> <a name="EventTableSpanEventsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput"></a>

```csharp
public bool|IResolvable EventTableSpanEventsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableSpansEnabledInput`<sup>Optional</sup> <a name="EventTableSpansEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput"></a>

```csharp
public bool|IResolvable EventTableSpansEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableEventsEnabled`<sup>Required</sup> <a name="EventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled"></a>

```csharp
public bool|IResolvable EventTableEventsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableLogsEnabled`<sup>Required</sup> <a name="EventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled"></a>

```csharp
public bool|IResolvable EventTableLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableLogsIntervalMin`<sup>Required</sup> <a name="EventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin"></a>

```csharp
public double EventTableLogsIntervalMin { get; }
```

- *Type:* double

---

##### `EventTableSpanEventsEnabled`<sup>Required</sup> <a name="EventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled"></a>

```csharp
public bool|IResolvable EventTableSpanEventsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTableSpansEnabled`<sup>Required</sup> <a name="EventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled"></a>

```csharp
public bool|IResolvable EventTableSpansEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H">ResetOrganizationUsageMetricsAggregateLast24H</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationUsageMetricsAggregateLast24H` <a name="ResetOrganizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H"></a>

```csharp
private void ResetOrganizationUsageMetricsAggregateLast24H()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput">OrganizationUsageMetricsAggregateLast24HInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H">OrganizationUsageMetricsAggregateLast24H</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationUsageMetricsAggregateLast24HInput`<sup>Optional</sup> <a name="OrganizationUsageMetricsAggregateLast24HInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput"></a>

```csharp
public bool|IResolvable OrganizationUsageMetricsAggregateLast24HInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OrganizationUsageMetricsAggregateLast24H`<sup>Required</sup> <a name="OrganizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H"></a>

```csharp
public bool|IResolvable OrganizationUsageMetricsAggregateLast24H { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled">ResetJoinQueryHistoryWithAccessHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin">ResetQueryHistoryLogsIntervalMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJoinQueryHistoryWithAccessHistoryEnabled` <a name="ResetJoinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled"></a>

```csharp
private void ResetJoinQueryHistoryWithAccessHistoryEnabled()
```

##### `ResetQueryHistoryLogsIntervalMin` <a name="ResetQueryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin"></a>

```csharp
private void ResetQueryHistoryLogsIntervalMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput">JoinQueryHistoryWithAccessHistoryEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput">QueryHistoryLogsIntervalMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled">JoinQueryHistoryWithAccessHistoryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin">QueryHistoryLogsIntervalMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JoinQueryHistoryWithAccessHistoryEnabledInput`<sup>Optional</sup> <a name="JoinQueryHistoryWithAccessHistoryEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput"></a>

```csharp
public bool|IResolvable JoinQueryHistoryWithAccessHistoryEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueryHistoryLogsIntervalMinInput`<sup>Optional</sup> <a name="QueryHistoryLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput"></a>

```csharp
public double QueryHistoryLogsIntervalMinInput { get; }
```

- *Type:* double

---

##### `JoinQueryHistoryWithAccessHistoryEnabled`<sup>Required</sup> <a name="JoinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```csharp
public bool|IResolvable JoinQueryHistoryWithAccessHistoryEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueryHistoryLogsIntervalMin`<sup>Required</sup> <a name="QueryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin"></a>

```csharp
public double QueryHistoryLogsIntervalMin { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin">ResetSecurityLogsIntervalMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityLogsIntervalMin` <a name="ResetSecurityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin"></a>

```csharp
private void ResetSecurityLogsIntervalMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput">SecurityLogsIntervalMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin">SecurityLogsIntervalMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityLogsIntervalMinInput`<sup>Optional</sup> <a name="SecurityLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput"></a>

```csharp
public double SecurityLogsIntervalMinInput { get; }
```

- *Type:* double

---

##### `SecurityLogsIntervalMin`<sup>Required</sup> <a name="SecurityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin"></a>

```csharp
public double SecurityLogsIntervalMin { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings"></a>

```csharp
private void PutSettings(IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings"></a>

```csharp
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin">ResetTaskHistoryLogsIntervalMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTaskHistoryLogsIntervalMin` <a name="ResetTaskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin"></a>

```csharp
private void ResetTaskHistoryLogsIntervalMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput">TaskHistoryLogsIntervalMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin">TaskHistoryLogsIntervalMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TaskHistoryLogsIntervalMinInput`<sup>Optional</sup> <a name="TaskHistoryLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput"></a>

```csharp
public double TaskHistoryLogsIntervalMinInput { get; }
```

- *Type:* double

---

##### `TaskHistoryLogsIntervalMin`<sup>Required</sup> <a name="TaskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin"></a>

```csharp
public double TaskHistoryLogsIntervalMin { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountSettingsOutputReference <a name="IntegrationSnowflakeAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationSnowflakeAccountSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput">SnowflakeAccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier">SnowflakeAccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnowflakeAccountIdentifierInput`<sup>Optional</sup> <a name="SnowflakeAccountIdentifierInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput"></a>

```csharp
public string SnowflakeAccountIdentifierInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `SnowflakeAccountIdentifier`<sup>Required</sup> <a name="SnowflakeAccountIdentifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier"></a>

```csharp
public string SnowflakeAccountIdentifier { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationSnowflakeAccountSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---



