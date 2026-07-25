# `complianceResourceEvaluationFilter` Submodule <a name="`complianceResourceEvaluationFilter` Submodule" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceResourceEvaluationFilter <a name="ComplianceResourceEvaluationFilter" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/compliance_resource_evaluation_filter datadog_compliance_resource_evaluation_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ComplianceResourceEvaluationFilter(Construct Scope, string Id, ComplianceResourceEvaluationFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig">ComplianceResourceEvaluationFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig">ComplianceResourceEvaluationFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComplianceResourceEvaluationFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ComplianceResourceEvaluationFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ComplianceResourceEvaluationFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ComplianceResourceEvaluationFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ComplianceResourceEvaluationFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComplianceResourceEvaluationFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceResourceEvaluationFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceResourceEvaluationFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/compliance_resource_evaluation_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComplianceResourceEvaluationFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProviderInput">CloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProviderInput"></a>

```csharp
public string CloudProviderInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceResourceEvaluationFilterConfig <a name="ComplianceResourceEvaluationFilterConfig" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ComplianceResourceEvaluationFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CloudProvider,
    string ResourceId,
    string[] Tags
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.cloudProvider">CloudProvider</a></code> | <code>string</code> | The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of the of the filter's targeted resource. |
| <code><a href="#@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.tags">Tags</a></code> | <code>string[]</code> | List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.cloudProvider"></a>

```csharp
public string CloudProvider { get; set; }
```

- *Type:* string

The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/compliance_resource_evaluation_filter#cloud_provider ComplianceResourceEvaluationFilter#cloud_provider}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of the of the filter's targeted resource.

Different cloud providers target different resource IDs:

* `aws`: account ID
* `gcp`: project ID
* `azure`: subscription ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/compliance_resource_evaluation_filter#resource_id ComplianceResourceEvaluationFilter#resource_id}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/compliance_resource_evaluation_filter#tags ComplianceResourceEvaluationFilter#tags}

---



