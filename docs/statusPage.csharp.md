# `statusPage` Submodule <a name="`statusPage` Submodule" id="@cdktn/provider-datadog.statusPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPage <a name="StatusPage" id="@cdktn/provider-datadog.statusPage.StatusPage"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPage(Construct Scope, string Id, StatusPageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig">StatusPageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig">StatusPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo">ResetCompanyLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage">ResetEmailHeaderImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon">ResetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon">ResetSlackAppIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled">ResetSlackSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled">ResetSubscriptionsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPage.StatusPage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.statusPage.StatusPage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.statusPage.StatusPage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCompanyLogo` <a name="ResetCompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo"></a>

```csharp
private void ResetCompanyLogo()
```

##### `ResetEmailHeaderImage` <a name="ResetEmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage"></a>

```csharp
private void ResetEmailHeaderImage()
```

##### `ResetFavicon` <a name="ResetFavicon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon"></a>

```csharp
private void ResetFavicon()
```

##### `ResetSlackAppIcon` <a name="ResetSlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon"></a>

```csharp
private void ResetSlackAppIcon()
```

##### `ResetSlackSubscriptionsEnabled` <a name="ResetSlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled"></a>

```csharp
private void ResetSlackSubscriptionsEnabled()
```

##### `ResetSubscriptionsEnabled` <a name="ResetSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled"></a>

```csharp
private void ResetSubscriptionsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

StatusPage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StatusPage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StatusPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StatusPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain">CustomDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled">CustomDomainEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl">PageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput">CompanyLogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput">DomainPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput">EmailHeaderImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput">FaviconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput">SlackAppIconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput">SlackSubscriptionsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput">SubscriptionsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput">VisualizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo">CompanyLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix">DomainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage">EmailHeaderImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.favicon">Favicon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon">SlackAppIcon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled">SlackSubscriptionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType">VisualizationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.statusPage.StatusPage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPage.StatusPage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPage.StatusPage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPage.StatusPage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain"></a>

```csharp
public string CustomDomain { get; }
```

- *Type:* string

---

##### `CustomDomainEnabled`<sup>Required</sup> <a name="CustomDomainEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled"></a>

```csharp
public IResolvable CustomDomainEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPage.StatusPage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `PageUrl`<sup>Required</sup> <a name="PageUrl" id="@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl"></a>

```csharp
public string PageUrl { get; }
```

- *Type:* string

---

##### `CompanyLogoInput`<sup>Optional</sup> <a name="CompanyLogoInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput"></a>

```csharp
public string CompanyLogoInput { get; }
```

- *Type:* string

---

##### `DomainPrefixInput`<sup>Optional</sup> <a name="DomainPrefixInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput"></a>

```csharp
public string DomainPrefixInput { get; }
```

- *Type:* string

---

##### `EmailHeaderImageInput`<sup>Optional</sup> <a name="EmailHeaderImageInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput"></a>

```csharp
public string EmailHeaderImageInput { get; }
```

- *Type:* string

---

##### `FaviconInput`<sup>Optional</sup> <a name="FaviconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput"></a>

```csharp
public string FaviconInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SlackAppIconInput`<sup>Optional</sup> <a name="SlackAppIconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput"></a>

```csharp
public string SlackAppIconInput { get; }
```

- *Type:* string

---

##### `SlackSubscriptionsEnabledInput`<sup>Optional</sup> <a name="SlackSubscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput"></a>

```csharp
public bool|IResolvable SlackSubscriptionsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubscriptionsEnabledInput`<sup>Optional</sup> <a name="SubscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput"></a>

```csharp
public bool|IResolvable SubscriptionsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VisualizationTypeInput`<sup>Optional</sup> <a name="VisualizationTypeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput"></a>

```csharp
public string VisualizationTypeInput { get; }
```

- *Type:* string

---

##### `CompanyLogo`<sup>Required</sup> <a name="CompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo"></a>

```csharp
public string CompanyLogo { get; }
```

- *Type:* string

---

##### `DomainPrefix`<sup>Required</sup> <a name="DomainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix"></a>

```csharp
public string DomainPrefix { get; }
```

- *Type:* string

---

##### `EmailHeaderImage`<sup>Required</sup> <a name="EmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage"></a>

```csharp
public string EmailHeaderImage { get; }
```

- *Type:* string

---

##### `Favicon`<sup>Required</sup> <a name="Favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.favicon"></a>

```csharp
public string Favicon { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPage.StatusPage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SlackAppIcon`<sup>Required</sup> <a name="SlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon"></a>

```csharp
public string SlackAppIcon { get; }
```

- *Type:* string

---

##### `SlackSubscriptionsEnabled`<sup>Required</sup> <a name="SlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled"></a>

```csharp
public bool|IResolvable SlackSubscriptionsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubscriptionsEnabled`<sup>Required</sup> <a name="SubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled"></a>

```csharp
public bool|IResolvable SubscriptionsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VisualizationType`<sup>Required</sup> <a name="VisualizationType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType"></a>

```csharp
public string VisualizationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageConfig <a name="StatusPageConfig" id="@cdktn/provider-datadog.statusPage.StatusPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new StatusPageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainPrefix,
    string Name,
    string Type,
    string VisualizationType,
    string CompanyLogo = null,
    string EmailHeaderImage = null,
    string Favicon = null,
    string SlackAppIcon = null,
    bool|IResolvable SlackSubscriptionsEnabled = null,
    bool|IResolvable SubscriptionsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix">DomainPrefix</a></code> | <code>string</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name">Name</a></code> | <code>string</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type">Type</a></code> | <code>string</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType">VisualizationType</a></code> | <code>string</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo">CompanyLogo</a></code> | <code>string</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage">EmailHeaderImage</a></code> | <code>string</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon">Favicon</a></code> | <code>string</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon">SlackAppIcon</a></code> | <code>string</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled">SlackSubscriptionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainPrefix`<sup>Required</sup> <a name="DomainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix"></a>

```csharp
public string DomainPrefix { get; set; }
```

- *Type:* string

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `VisualizationType`<sup>Required</sup> <a name="VisualizationType" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType"></a>

```csharp
public string VisualizationType { get; set; }
```

- *Type:* string

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `CompanyLogo`<sup>Optional</sup> <a name="CompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo"></a>

```csharp
public string CompanyLogo { get; set; }
```

- *Type:* string

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `EmailHeaderImage`<sup>Optional</sup> <a name="EmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage"></a>

```csharp
public string EmailHeaderImage { get; set; }
```

- *Type:* string

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `Favicon`<sup>Optional</sup> <a name="Favicon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon"></a>

```csharp
public string Favicon { get; set; }
```

- *Type:* string

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `SlackAppIcon`<sup>Optional</sup> <a name="SlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon"></a>

```csharp
public string SlackAppIcon { get; set; }
```

- *Type:* string

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `SlackSubscriptionsEnabled`<sup>Optional</sup> <a name="SlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled"></a>

```csharp
public bool|IResolvable SlackSubscriptionsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `SubscriptionsEnabled`<sup>Optional</sup> <a name="SubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled"></a>

```csharp
public bool|IResolvable SubscriptionsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---



