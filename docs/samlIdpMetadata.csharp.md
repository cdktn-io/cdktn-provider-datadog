# `samlIdpMetadata` Submodule <a name="`samlIdpMetadata` Submodule" id="@cdktn/provider-datadog.samlIdpMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdpMetadata <a name="SamlIdpMetadata" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/saml_idp_metadata datadog_saml_idp_metadata}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SamlIdpMetadata(Construct Scope, string Id, SamlIdpMetadataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig">SamlIdpMetadataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig">SamlIdpMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SamlIdpMetadata resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SamlIdpMetadata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SamlIdpMetadata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SamlIdpMetadata.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SamlIdpMetadata.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SamlIdpMetadata resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlIdpMetadata to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlIdpMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/saml_idp_metadata#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SamlIdpMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.assertionConsumerService">AssertionConsumerService</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.idpMetadataInput">IdpMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.idpMetadata">IdpMetadata</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssertionConsumerService`<sup>Required</sup> <a name="AssertionConsumerService" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.assertionConsumerService"></a>

```csharp
public string[] AssertionConsumerService { get; }
```

- *Type:* string[]

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `IdpMetadataInput`<sup>Optional</sup> <a name="IdpMetadataInput" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.idpMetadataInput"></a>

```csharp
public string IdpMetadataInput { get; }
```

- *Type:* string

---

##### `IdpMetadata`<sup>Required</sup> <a name="IdpMetadata" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.idpMetadata"></a>

```csharp
public string IdpMetadata { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpMetadataConfig <a name="SamlIdpMetadataConfig" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SamlIdpMetadataConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IdpMetadata
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.idpMetadata">IdpMetadata</a></code> | <code>string</code> | The content of the IdP metadata XML file, for example loaded with the `file()` function. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpMetadata`<sup>Required</sup> <a name="IdpMetadata" id="@cdktn/provider-datadog.samlIdpMetadata.SamlIdpMetadataConfig.property.idpMetadata"></a>

```csharp
public string IdpMetadata { get; set; }
```

- *Type:* string

The content of the IdP metadata XML file, for example loaded with the `file()` function.

A leading UTF-8 byte order mark (BOM) is stripped automatically before upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/saml_idp_metadata#idp_metadata SamlIdpMetadata#idp_metadata}

---



