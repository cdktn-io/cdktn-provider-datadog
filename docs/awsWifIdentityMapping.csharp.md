# `awsWifIdentityMapping` Submodule <a name="`awsWifIdentityMapping` Submodule" id="@cdktn/provider-datadog.awsWifIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsWifIdentityMapping <a name="AwsWifIdentityMapping" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping datadog_aws_wif_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AwsWifIdentityMapping(Construct Scope, string Id, AwsWifIdentityMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig">AwsWifIdentityMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig">AwsWifIdentityMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsWifIdentityMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsWifIdentityMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsWifIdentityMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AwsWifIdentityMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsWifIdentityMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsWifIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsWifIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountUuid">AccountUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPatternInput">ArnPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPattern">ArnPattern</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountUuid`<sup>Required</sup> <a name="AccountUuid" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountUuid"></a>

```csharp
public string AccountUuid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifierInput"></a>

```csharp
public string AccountIdentifierInput { get; }
```

- *Type:* string

---

##### `ArnPatternInput`<sup>Optional</sup> <a name="ArnPatternInput" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPatternInput"></a>

```csharp
public string ArnPatternInput { get; }
```

- *Type:* string

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; }
```

- *Type:* string

---

##### `ArnPattern`<sup>Required</sup> <a name="ArnPattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPattern"></a>

```csharp
public string ArnPattern { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsWifIdentityMappingConfig <a name="AwsWifIdentityMappingConfig" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AwsWifIdentityMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountIdentifier,
    string ArnPattern
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | The email or handle of the Datadog user or service account that the AWS principal authenticates as. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.arnPattern">ArnPattern</a></code> | <code>string</code> | The AWS caller ARN pattern allowed to authenticate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; set; }
```

- *Type:* string

The email or handle of the Datadog user or service account that the AWS principal authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#account_identifier AwsWifIdentityMapping#account_identifier}

---

##### `ArnPattern`<sup>Required</sup> <a name="ArnPattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.arnPattern"></a>

```csharp
public string ArnPattern { get; set; }
```

- *Type:* string

The AWS caller ARN pattern allowed to authenticate.

Currently, only the `aws` partition is supported. For role-based authentication, use the STS assumed-role ARN returned by `aws sts get-caller-identity`, not the IAM role ARN shown in the AWS console. A pattern may contain one wildcard only, as a trailing `/*` after a specific resource, for example `arn:aws:sts::123456789012:assumed-role/terraform-runner/*`. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#arn_pattern AwsWifIdentityMapping#arn_pattern}

---



