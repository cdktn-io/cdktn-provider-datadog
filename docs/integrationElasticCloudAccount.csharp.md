# `integrationElasticCloudAccount` Submodule <a name="`integrationElasticCloudAccount` Submodule" id="@cdktn/provider-datadog.integrationElasticCloudAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationElasticCloudAccount <a name="IntegrationElasticCloudAccount" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account datadog_integration_elastic_cloud_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccount(Construct Scope, string Id, IntegrationElasticCloudAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig">IntegrationElasticCloudAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig">IntegrationElasticCloudAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows">PutDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetDataflows">ResetDataflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication"></a>

```csharp
private void PutAuthentication(IntegrationElasticCloudAccountAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---

##### `PutDataflows` <a name="PutDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows"></a>

```csharp
private void PutDataflows(IntegrationElasticCloudAccountDataflows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings"></a>

```csharp
private void PutSettings(IntegrationElasticCloudAccountSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---

##### `ResetDataflows` <a name="ResetDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetDataflows"></a>

```csharp
private void ResetDataflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationElasticCloudAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationElasticCloudAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationElasticCloudAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationElasticCloudAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationElasticCloudAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationElasticCloudAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationElasticCloudAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference">IntegrationElasticCloudAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference">IntegrationElasticCloudAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference">IntegrationElasticCloudAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authenticationInput">AuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflowsInput">DataflowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authentication"></a>

```csharp
public IntegrationElasticCloudAccountAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference">IntegrationElasticCloudAccountAuthenticationOutputReference</a>

---

##### `Dataflows`<sup>Required</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflows"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsOutputReference Dataflows { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference">IntegrationElasticCloudAccountDataflowsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settings"></a>

```csharp
public IntegrationElasticCloudAccountSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference">IntegrationElasticCloudAccountSettingsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authenticationInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountAuthentication AuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---

##### `DataflowsInput`<sup>Optional</sup> <a name="DataflowsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflowsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflows DataflowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settingsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationElasticCloudAccountAuthentication <a name="IntegrationElasticCloudAccountAuthentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountAuthentication {
    IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth ElasticCloudIntegrationAccountBasicAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.property.elasticCloudIntegrationAccountBasicAuth">ElasticCloudIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | The basic authentication method and username configured on the account. |

---

##### `ElasticCloudIntegrationAccountBasicAuth`<sup>Optional</sup> <a name="ElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.property.elasticCloudIntegrationAccountBasicAuth"></a>

```csharp
public IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth ElasticCloudIntegrationAccountBasicAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_integration_account_basic_auth IntegrationElasticCloudAccount#elastic_cloud_integration_account_basic_auth}

---

### IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth <a name="IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth {
    string PasswordWo,
    string PasswordWoVersion,
    string Username,
    string AuthType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWo">PasswordWo</a></code> | <code>string</code> | Secret password or private key. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | Version trigger for password_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.username">Username</a></code> | <code>string</code> | Non-secret username or public identifier for the credential pair. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.authType">AuthType</a></code> | <code>string</code> | The authentication method type. Valid values are `basic`. Defaults to `"basic"`. |

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#password_wo IntegrationElasticCloudAccount#password_wo}

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; set; }
```

- *Type:* string

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#password_wo_version IntegrationElasticCloudAccount#password_wo_version}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#username IntegrationElasticCloudAccount#username}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#auth_type IntegrationElasticCloudAccount#auth_type}

---

### IntegrationElasticCloudAccountConfig <a name="IntegrationElasticCloudAccountConfig" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IntegrationElasticCloudAccountAuthentication Authentication,
    string Name,
    IntegrationElasticCloudAccountSettings Settings,
    IntegrationElasticCloudAccountDataflows Dataflows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | Authentication configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.name">Name</a></code> | <code>string</code> | Human-readable name of the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | Settings configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | Data Datadog collects from Elastic Cloud, keyed by dataflow id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.authentication"></a>

```csharp
public IntegrationElasticCloudAccountAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

Authentication configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#authentication IntegrationElasticCloudAccount#authentication}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Human-readable name of the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#name IntegrationElasticCloudAccount#name}

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.settings"></a>

```csharp
public IntegrationElasticCloudAccountSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

Settings configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#settings IntegrationElasticCloudAccount#settings}

---

##### `Dataflows`<sup>Optional</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dataflows"></a>

```csharp
public IntegrationElasticCloudAccountDataflows Dataflows { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

Data Datadog collects from Elastic Cloud, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#dataflows IntegrationElasticCloudAccount#dataflows}

---

### IntegrationElasticCloudAccountDataflows <a name="IntegrationElasticCloudAccountDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflows {
    IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats ElasticCloudDetailedIndexStats = null,
    IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats ElasticCloudIndexStats = null,
    IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats ElasticCloudPendingTaskStats = null,
    IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout ElasticCloudPrimaryShardGracefulTimeout = null,
    IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats ElasticCloudPrimaryShardStats = null,
    IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats ElasticCloudShardAllocationStats = null,
    IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats ElasticCloudSlmStats = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudDetailedIndexStats">ElasticCloudDetailedIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | Primary shard metrics broken down per index, rather than aggregated across the cluster. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudIndexStats">ElasticCloudIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPendingTaskStats">ElasticCloudPendingTaskStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | Metrics for cluster-level changes that have been submitted but not yet executed. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardGracefulTimeout">ElasticCloudPrimaryShardGracefulTimeout</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardStats">ElasticCloudPrimaryShardStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | Metrics covering only the cluster's primary shards. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudShardAllocationStats">ElasticCloudShardAllocationStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | Metrics for how many shards are allocated to each data node, and the disk space they use. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudSlmStats">ElasticCloudSlmStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | Metrics about the actions taken by snapshot lifecycle management. |

---

##### `ElasticCloudDetailedIndexStats`<sup>Optional</sup> <a name="ElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudDetailedIndexStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats ElasticCloudDetailedIndexStats { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

Primary shard metrics broken down per index, rather than aggregated across the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_detailed_index_stats IntegrationElasticCloudAccount#elastic_cloud_detailed_index_stats}

---

##### `ElasticCloudIndexStats`<sup>Optional</sup> <a name="ElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudIndexStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats ElasticCloudIndexStats { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_index_stats IntegrationElasticCloudAccount#elastic_cloud_index_stats}

---

##### `ElasticCloudPendingTaskStats`<sup>Optional</sup> <a name="ElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPendingTaskStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats ElasticCloudPendingTaskStats { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

Metrics for cluster-level changes that have been submitted but not yet executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_pending_task_stats IntegrationElasticCloudAccount#elastic_cloud_pending_task_stats}

---

##### `ElasticCloudPrimaryShardGracefulTimeout`<sup>Optional</sup> <a name="ElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardGracefulTimeout"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout ElasticCloudPrimaryShardGracefulTimeout { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run.

Only has an effect alongside `elastic-cloud-primary-shard-stats`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_graceful_timeout IntegrationElasticCloudAccount#elastic_cloud_primary_shard_graceful_timeout}

---

##### `ElasticCloudPrimaryShardStats`<sup>Optional</sup> <a name="ElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats ElasticCloudPrimaryShardStats { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

Metrics covering only the cluster's primary shards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_stats IntegrationElasticCloudAccount#elastic_cloud_primary_shard_stats}

---

##### `ElasticCloudShardAllocationStats`<sup>Optional</sup> <a name="ElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudShardAllocationStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats ElasticCloudShardAllocationStats { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

Metrics for how many shards are allocated to each data node, and the disk space they use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_shard_allocation_stats IntegrationElasticCloudAccount#elastic_cloud_shard_allocation_stats}

---

##### `ElasticCloudSlmStats`<sup>Optional</sup> <a name="ElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudSlmStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats ElasticCloudSlmStats { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

Metrics about the actions taken by snapshot lifecycle management.

Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_slm_stats IntegrationElasticCloudAccount#elastic_cloud_slm_stats}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudMetrics <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetrics" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudMetrics {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this tolerance is applied. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this tolerance is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus {

};
```


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus {

};
```


### IntegrationElasticCloudAccountSettings <a name="IntegrationElasticCloudAccountSettings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountSettings {
    string Url,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.url">Url</a></code> | <code>string</code> | Elastic Cloud deployment URL. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.tags">Tags</a></code> | <code>string</code> | Comma-separated list of custom tags for this Elastic Cloud deployment. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Elastic Cloud deployment URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#url IntegrationElasticCloudAccount#url}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

Comma-separated list of custom tags for this Elastic Cloud deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_elastic_cloud_account#tags IntegrationElasticCloudAccount#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference <a name="IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput"></a>

```csharp
public string PasswordWoVersionInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### ~~`PasswordWo`~~<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---


### IntegrationElasticCloudAccountAuthenticationOutputReference <a name="IntegrationElasticCloudAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth">PutElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resetElasticCloudIntegrationAccountBasicAuth">ResetElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElasticCloudIntegrationAccountBasicAuth` <a name="PutElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth"></a>

```csharp
private void PutElasticCloudIntegrationAccountBasicAuth(IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---

##### `ResetElasticCloudIntegrationAccountBasicAuth` <a name="ResetElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resetElasticCloudIntegrationAccountBasicAuth"></a>

```csharp
private void ResetElasticCloudIntegrationAccountBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuth">ElasticCloudIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuthInput">ElasticCloudIntegrationAccountBasicAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElasticCloudIntegrationAccountBasicAuth`<sup>Required</sup> <a name="ElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuth"></a>

```csharp
public IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference ElasticCloudIntegrationAccountBasicAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference</a>

---

##### `ElasticCloudIntegrationAccountBasicAuthInput`<sup>Optional</sup> <a name="ElasticCloudIntegrationAccountBasicAuthInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuthInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth ElasticCloudIntegrationAccountBasicAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics">IntegrationElasticCloudAccountDataflowsElasticCloudMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics">IntegrationElasticCloudAccountDataflowsElasticCloudMetrics</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.status"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.internalValue"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsOutputReference <a name="IntegrationElasticCloudAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountDataflowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats">PutElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats">PutElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats">PutElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout">PutElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats">PutElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats">PutElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats">PutElasticCloudSlmStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudDetailedIndexStats">ResetElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudIndexStats">ResetElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPendingTaskStats">ResetElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardGracefulTimeout">ResetElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardStats">ResetElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudShardAllocationStats">ResetElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudSlmStats">ResetElasticCloudSlmStats</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElasticCloudDetailedIndexStats` <a name="PutElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats"></a>

```csharp
private void PutElasticCloudDetailedIndexStats(IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---

##### `PutElasticCloudIndexStats` <a name="PutElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats"></a>

```csharp
private void PutElasticCloudIndexStats(IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---

##### `PutElasticCloudPendingTaskStats` <a name="PutElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats"></a>

```csharp
private void PutElasticCloudPendingTaskStats(IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---

##### `PutElasticCloudPrimaryShardGracefulTimeout` <a name="PutElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout"></a>

```csharp
private void PutElasticCloudPrimaryShardGracefulTimeout(IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---

##### `PutElasticCloudPrimaryShardStats` <a name="PutElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats"></a>

```csharp
private void PutElasticCloudPrimaryShardStats(IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---

##### `PutElasticCloudShardAllocationStats` <a name="PutElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats"></a>

```csharp
private void PutElasticCloudShardAllocationStats(IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---

##### `PutElasticCloudSlmStats` <a name="PutElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats"></a>

```csharp
private void PutElasticCloudSlmStats(IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---

##### `ResetElasticCloudDetailedIndexStats` <a name="ResetElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudDetailedIndexStats"></a>

```csharp
private void ResetElasticCloudDetailedIndexStats()
```

##### `ResetElasticCloudIndexStats` <a name="ResetElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudIndexStats"></a>

```csharp
private void ResetElasticCloudIndexStats()
```

##### `ResetElasticCloudPendingTaskStats` <a name="ResetElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPendingTaskStats"></a>

```csharp
private void ResetElasticCloudPendingTaskStats()
```

##### `ResetElasticCloudPrimaryShardGracefulTimeout` <a name="ResetElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardGracefulTimeout"></a>

```csharp
private void ResetElasticCloudPrimaryShardGracefulTimeout()
```

##### `ResetElasticCloudPrimaryShardStats` <a name="ResetElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardStats"></a>

```csharp
private void ResetElasticCloudPrimaryShardStats()
```

##### `ResetElasticCloudShardAllocationStats` <a name="ResetElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudShardAllocationStats"></a>

```csharp
private void ResetElasticCloudShardAllocationStats()
```

##### `ResetElasticCloudSlmStats` <a name="ResetElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudSlmStats"></a>

```csharp
private void ResetElasticCloudSlmStats()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStats">ElasticCloudDetailedIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStats">ElasticCloudIndexStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudMetrics">ElasticCloudMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStats">ElasticCloudPendingTaskStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeout">ElasticCloudPrimaryShardGracefulTimeout</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStats">ElasticCloudPrimaryShardStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStats">ElasticCloudShardAllocationStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStats">ElasticCloudSlmStats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStatsInput">ElasticCloudDetailedIndexStatsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStatsInput">ElasticCloudIndexStatsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStatsInput">ElasticCloudPendingTaskStatsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeoutInput">ElasticCloudPrimaryShardGracefulTimeoutInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStatsInput">ElasticCloudPrimaryShardStatsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStatsInput">ElasticCloudShardAllocationStatsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStatsInput">ElasticCloudSlmStatsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElasticCloudDetailedIndexStats`<sup>Required</sup> <a name="ElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference ElasticCloudDetailedIndexStats { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference</a>

---

##### `ElasticCloudIndexStats`<sup>Required</sup> <a name="ElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference ElasticCloudIndexStats { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference</a>

---

##### `ElasticCloudMetrics`<sup>Required</sup> <a name="ElasticCloudMetrics" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudMetrics"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference ElasticCloudMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference</a>

---

##### `ElasticCloudPendingTaskStats`<sup>Required</sup> <a name="ElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference ElasticCloudPendingTaskStats { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference</a>

---

##### `ElasticCloudPrimaryShardGracefulTimeout`<sup>Required</sup> <a name="ElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeout"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference ElasticCloudPrimaryShardGracefulTimeout { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference</a>

---

##### `ElasticCloudPrimaryShardStats`<sup>Required</sup> <a name="ElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference ElasticCloudPrimaryShardStats { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference</a>

---

##### `ElasticCloudShardAllocationStats`<sup>Required</sup> <a name="ElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference ElasticCloudShardAllocationStats { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference</a>

---

##### `ElasticCloudSlmStats`<sup>Required</sup> <a name="ElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStats"></a>

```csharp
public IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference ElasticCloudSlmStats { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference</a>

---

##### `ElasticCloudDetailedIndexStatsInput`<sup>Optional</sup> <a name="ElasticCloudDetailedIndexStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStatsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats ElasticCloudDetailedIndexStatsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---

##### `ElasticCloudIndexStatsInput`<sup>Optional</sup> <a name="ElasticCloudIndexStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStatsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats ElasticCloudIndexStatsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---

##### `ElasticCloudPendingTaskStatsInput`<sup>Optional</sup> <a name="ElasticCloudPendingTaskStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStatsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats ElasticCloudPendingTaskStatsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---

##### `ElasticCloudPrimaryShardGracefulTimeoutInput`<sup>Optional</sup> <a name="ElasticCloudPrimaryShardGracefulTimeoutInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeoutInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout ElasticCloudPrimaryShardGracefulTimeoutInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---

##### `ElasticCloudPrimaryShardStatsInput`<sup>Optional</sup> <a name="ElasticCloudPrimaryShardStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStatsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats ElasticCloudPrimaryShardStatsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---

##### `ElasticCloudShardAllocationStatsInput`<sup>Optional</sup> <a name="ElasticCloudShardAllocationStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStatsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats ElasticCloudShardAllocationStatsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---

##### `ElasticCloudSlmStatsInput`<sup>Optional</sup> <a name="ElasticCloudSlmStatsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStatsInput"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats ElasticCloudSlmStatsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountDataflows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---


### IntegrationElasticCloudAccountSettingsOutputReference <a name="IntegrationElasticCloudAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationElasticCloudAccountSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationElasticCloudAccountSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---



