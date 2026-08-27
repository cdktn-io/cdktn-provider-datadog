# `webhookOauth2ClientCredentials` Submodule <a name="`webhookOauth2ClientCredentials` Submodule" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookOauth2ClientCredentials <a name="WebhookOauth2ClientCredentials" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new WebhookOauth2ClientCredentials(Construct Scope, string Id, WebhookOauth2ClientCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig">WebhookOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig">WebhookOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAudience` <a name="ResetAudience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

WebhookOauth2ClientCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

WebhookOauth2ClientCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

WebhookOauth2ClientCredentials.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

WebhookOauth2ClientCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebhookOauth2ClientCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebhookOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WebhookOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput"></a>

```csharp
public string AccessTokenUrlInput { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookOauth2ClientCredentialsConfig <a name="WebhookOauth2ClientCredentialsConfig" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new WebhookOauth2ClientCredentialsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessTokenUrl,
    string ClientId,
    string ClientSecret,
    string Name,
    string Audience = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name">Name</a></code> | <code>string</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience">Audience</a></code> | <code>string</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope">Scope</a></code> | <code>string</code> | The scope requested when fetching the access token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; set; }
```

- *Type:* string

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---



