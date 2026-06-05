# `syntheticsSuite` Submodule <a name="`syntheticsSuite` Submodule" id="@cdktn/provider-datadog.syntheticsSuite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsSuite <a name="SyntheticsSuite" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite datadog_synthetics_suite}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuite(Construct Scope, string Id, SyntheticsSuiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig">SyntheticsSuiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig">SyntheticsSuiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests">PutTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests">ResetTests</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions"></a>

```csharp
private void PutOptions(IResolvable|SyntheticsSuiteOptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

---

##### `PutTests` <a name="PutTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests"></a>

```csharp
private void PutTests(IResolvable|SyntheticsSuiteTests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

---

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTests` <a name="ResetTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests"></a>

```csharp
private void ResetTests()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsSuite.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsSuite.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsSuite.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsSuite.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsSuite to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsSuite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsSuite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests">Tests</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput">TestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options"></a>

```csharp
public SyntheticsSuiteOptionsList Options { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a>

---

##### `Tests`<sup>Required</sup> <a name="Tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests"></a>

```csharp
public SyntheticsSuiteTestsList Tests { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput"></a>

```csharp
public IResolvable|SyntheticsSuiteOptions[] OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TestsInput`<sup>Optional</sup> <a name="TestsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput"></a>

```csharp
public IResolvable|SyntheticsSuiteTests[] TestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsSuiteConfig <a name="SyntheticsSuiteConfig" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Message = null,
    IResolvable|SyntheticsSuiteOptions[] Options = null,
    string[] Tags = null,
    IResolvable|SyntheticsSuiteTests[] Tests = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name">Name</a></code> | <code>string</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message">Message</a></code> | <code>string</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options">Options</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags">Tags</a></code> | <code>string[]</code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests">Tests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]</code> | tests block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options"></a>

```csharp
public IResolvable|SyntheticsSuiteOptions[] Options { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `Tests`<sup>Optional</sup> <a name="Tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests"></a>

```csharp
public IResolvable|SyntheticsSuiteTests[] Tests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

### SyntheticsSuiteOptions <a name="SyntheticsSuiteOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteOptions {
    double AlertingThreshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold">AlertingThreshold</a></code> | <code>double</code> | Alerting threshold for the suite. Value must be between 0.000000 and 1.000000. |

---

##### `AlertingThreshold`<sup>Required</sup> <a name="AlertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold"></a>

```csharp
public double AlertingThreshold { get; set; }
```

- *Type:* double

Alerting threshold for the suite. Value must be between 0.000000 and 1.000000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#alerting_threshold SyntheticsSuite#alerting_threshold}

---

### SyntheticsSuiteTests <a name="SyntheticsSuiteTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteTests {
    string PublicId,
    string AlertingCriticality = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId">PublicId</a></code> | <code>string</code> | Public ID of the test. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality">AlertingCriticality</a></code> | <code>string</code> | Alerting criticality for the test. Valid values are `ignore`, `critical`. |

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId"></a>

```csharp
public string PublicId { get; set; }
```

- *Type:* string

Public ID of the test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#public_id SyntheticsSuite#public_id}

---

##### `AlertingCriticality`<sup>Optional</sup> <a name="AlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality"></a>

```csharp
public string AlertingCriticality { get; set; }
```

- *Type:* string

Alerting criticality for the test. Valid values are `ignore`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/synthetics_suite#alerting_criticality SyntheticsSuite#alerting_criticality}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsSuiteOptionsList <a name="SyntheticsSuiteOptionsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get"></a>

```csharp
private SyntheticsSuiteOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsSuiteOptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>[]

---


### SyntheticsSuiteOptionsOutputReference <a name="SyntheticsSuiteOptionsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput">AlertingThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold">AlertingThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertingThresholdInput`<sup>Optional</sup> <a name="AlertingThresholdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput"></a>

```csharp
public double AlertingThresholdInput { get; }
```

- *Type:* double

---

##### `AlertingThreshold`<sup>Required</sup> <a name="AlertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold"></a>

```csharp
public double AlertingThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsSuiteOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>

---


### SyntheticsSuiteTestsList <a name="SyntheticsSuiteTestsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteTestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get"></a>

```csharp
private SyntheticsSuiteTestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsSuiteTests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>[]

---


### SyntheticsSuiteTestsOutputReference <a name="SyntheticsSuiteTestsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsSuiteTestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality">ResetAlertingCriticality</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlertingCriticality` <a name="ResetAlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality"></a>

```csharp
private void ResetAlertingCriticality()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput">AlertingCriticalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput">PublicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality">AlertingCriticality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId">PublicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertingCriticalityInput`<sup>Optional</sup> <a name="AlertingCriticalityInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput"></a>

```csharp
public string AlertingCriticalityInput { get; }
```

- *Type:* string

---

##### `PublicIdInput`<sup>Optional</sup> <a name="PublicIdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput"></a>

```csharp
public string PublicIdInput { get; }
```

- *Type:* string

---

##### `AlertingCriticality`<sup>Required</sup> <a name="AlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality"></a>

```csharp
public string AlertingCriticality { get; }
```

- *Type:* string

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId"></a>

```csharp
public string PublicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsSuiteTests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>

---



