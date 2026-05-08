# `awsCurConfig` Submodule <a name="`awsCurConfig` Submodule" id="@cdktn/provider-datadog.awsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCurConfig <a name="AwsCurConfig" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AwsCurConfig(Construct Scope, string Id, AwsCurConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig">AwsCurConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig">AwsCurConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters">PutAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters">ResetAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountFilters` <a name="PutAccountFilters" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters"></a>

```csharp
private void PutAccountFilters(AwsCurConfigAccountFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---

##### `ResetAccountFilters` <a name="ResetAccountFilters" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters"></a>

```csharp
private void ResetAccountFilters()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion"></a>

```csharp
private void ResetBucketRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsCurConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsCurConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsCurConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsCurConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsCurConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsCurConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsCurConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters">AccountFilters</a></code> | <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.errorMessages">ErrorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.statusUpdatedAt">StatusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput">AccountFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput">BucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput">ReportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput">ReportPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName">ReportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix">ReportPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountFilters`<sup>Required</sup> <a name="AccountFilters" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters"></a>

```csharp
public AwsCurConfigAccountFiltersOutputReference AccountFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.errorMessages"></a>

```csharp
public string[] ErrorMessages { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusUpdatedAt`<sup>Required</sup> <a name="StatusUpdatedAt" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.statusUpdatedAt"></a>

```csharp
public string StatusUpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountFiltersInput`<sup>Optional</sup> <a name="AccountFiltersInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput"></a>

```csharp
public IResolvable|AwsCurConfigAccountFilters AccountFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput"></a>

```csharp
public string BucketRegionInput { get; }
```

- *Type:* string

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput"></a>

```csharp
public string ReportNameInput { get; }
```

- *Type:* string

---

##### `ReportPrefixInput`<sup>Optional</sup> <a name="ReportPrefixInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput"></a>

```csharp
public string ReportPrefixInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName"></a>

```csharp
public string ReportName { get; }
```

- *Type:* string

---

##### `ReportPrefix`<sup>Required</sup> <a name="ReportPrefix" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix"></a>

```csharp
public string ReportPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsCurConfigAccountFilters <a name="AwsCurConfigAccountFilters" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AwsCurConfigAccountFilters {
    string[] ExcludedAccounts = null,
    string[] IncludedAccounts = null,
    bool|IResolvable IncludeNewAccounts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | List of AWS account IDs to exclude from cost analysis. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts">IncludedAccounts</a></code> | <code>string[]</code> | List of AWS account IDs to include in cost analysis. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts">IncludeNewAccounts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to automatically include new member accounts in your cost analysis. |

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; set; }
```

- *Type:* string[]

List of AWS account IDs to exclude from cost analysis.

Only used when `include_new_accounts` is `true`. Cannot be used together with `included_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#excluded_accounts AwsCurConfig#excluded_accounts}

---

##### `IncludedAccounts`<sup>Optional</sup> <a name="IncludedAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts"></a>

```csharp
public string[] IncludedAccounts { get; set; }
```

- *Type:* string[]

List of AWS account IDs to include in cost analysis.

Only used when `include_new_accounts` is `false`. Cannot be used together with `excluded_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#included_accounts AwsCurConfig#included_accounts}

---

##### `IncludeNewAccounts`<sup>Optional</sup> <a name="IncludeNewAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts"></a>

```csharp
public bool|IResolvable IncludeNewAccounts { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to automatically include new member accounts in your cost analysis.

When `true`, use `excluded_accounts` to specify accounts to exclude. When `false`, use `included_accounts` to specify only the accounts to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#include_new_accounts AwsCurConfig#include_new_accounts}

---

### AwsCurConfigConfig <a name="AwsCurConfigConfig" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AwsCurConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string BucketName,
    string ReportName,
    string ReportPrefix,
    AwsCurConfigAccountFilters AccountFilters = null,
    string BucketRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId">AccountId</a></code> | <code>string</code> | The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName">BucketName</a></code> | <code>string</code> | The S3 bucket name where your AWS Cost and Usage Report files are stored. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName">ReportName</a></code> | <code>string</code> | The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix">ReportPrefix</a></code> | <code>string</code> | The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/'). |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters">AccountFilters</a></code> | <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | account_filters block. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#account_id AwsCurConfig#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The S3 bucket name where your AWS Cost and Usage Report files are stored.

This bucket must have appropriate IAM permissions for Datadog access and should be in the same AWS account as the CUR report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#bucket_name AwsCurConfig#bucket_name}

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName"></a>

```csharp
public string ReportName { get; set; }
```

- *Type:* string

The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences.

This must match the report name exactly as it appears in your AWS billing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#report_name AwsCurConfig#report_name}

---

##### `ReportPrefix`<sup>Required</sup> <a name="ReportPrefix" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix"></a>

```csharp
public string ReportPrefix { get; set; }
```

- *Type:* string

The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#report_prefix AwsCurConfig#report_prefix}

---

##### `AccountFilters`<sup>Optional</sup> <a name="AccountFilters" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters"></a>

```csharp
public AwsCurConfigAccountFilters AccountFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

account_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#account_filters AwsCurConfig#account_filters}

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; set; }
```

- *Type:* string

The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/aws_cur_config#bucket_region AwsCurConfig#bucket_region}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsCurConfigAccountFiltersOutputReference <a name="AwsCurConfigAccountFiltersOutputReference" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AwsCurConfigAccountFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts">ResetIncludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts">ResetIncludeNewAccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts"></a>

```csharp
private void ResetExcludedAccounts()
```

##### `ResetIncludedAccounts` <a name="ResetIncludedAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts"></a>

```csharp
private void ResetIncludedAccounts()
```

##### `ResetIncludeNewAccounts` <a name="ResetIncludeNewAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts"></a>

```csharp
private void ResetIncludeNewAccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput">IncludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput">IncludeNewAccountsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts">IncludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">IncludeNewAccounts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput"></a>

```csharp
public string[] ExcludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `IncludedAccountsInput`<sup>Optional</sup> <a name="IncludedAccountsInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput"></a>

```csharp
public string[] IncludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `IncludeNewAccountsInput`<sup>Optional</sup> <a name="IncludeNewAccountsInput" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput"></a>

```csharp
public bool|IResolvable IncludeNewAccountsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `IncludedAccounts`<sup>Required</sup> <a name="IncludedAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```csharp
public string[] IncludedAccounts { get; }
```

- *Type:* string[]

---

##### `IncludeNewAccounts`<sup>Required</sup> <a name="IncludeNewAccounts" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```csharp
public bool|IResolvable IncludeNewAccounts { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AwsCurConfigAccountFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---



