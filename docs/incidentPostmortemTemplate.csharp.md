# `incidentPostmortemTemplate` Submodule <a name="`incidentPostmortemTemplate` Submodule" id="@cdktn/provider-datadog.incidentPostmortemTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentPostmortemTemplate <a name="IncidentPostmortemTemplate" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentPostmortemTemplate(Construct Scope, string Id, IncidentPostmortemTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig">IncidentPostmortemTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig">IncidentPostmortemTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings">PutConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings">PutGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings">ResetConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings">ResetGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfluencePostmortemSettings` <a name="PutConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings"></a>

```csharp
private void PutConfluencePostmortemSettings(IncidentPostmortemTemplateConfluencePostmortemSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `PutGoogleDocsPostmortemSettings` <a name="PutGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings"></a>

```csharp
private void PutGoogleDocsPostmortemSettings(IncidentPostmortemTemplateGoogleDocsPostmortemSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `ResetConfluencePostmortemSettings` <a name="ResetConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings"></a>

```csharp
private void ResetConfluencePostmortemSettings()
```

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetGoogleDocsPostmortemSettings` <a name="ResetGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings"></a>

```csharp
private void ResetGoogleDocsPostmortemSettings()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation"></a>

```csharp
private void ResetLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentPostmortemTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentPostmortemTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentPostmortemTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentPostmortemTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentPostmortemTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentPostmortemTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IncidentPostmortemTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings">ConfluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings">GoogleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser">LastModifiedByUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput">ConfluencePostmortemSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput">GoogleDocsPostmortemSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput">IsDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault">IsDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfluencePostmortemSettings`<sup>Required</sup> <a name="ConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings"></a>

```csharp
public IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference ConfluencePostmortemSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `GoogleDocsPostmortemSettings`<sup>Required</sup> <a name="GoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings"></a>

```csharp
public IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference GoogleDocsPostmortemSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedByUser`<sup>Required</sup> <a name="LastModifiedByUser" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser"></a>

```csharp
public string LastModifiedByUser { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `ConfluencePostmortemSettingsInput`<sup>Optional</sup> <a name="ConfluencePostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput"></a>

```csharp
public IResolvable|IncidentPostmortemTemplateConfluencePostmortemSettings ConfluencePostmortemSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `GoogleDocsPostmortemSettingsInput`<sup>Optional</sup> <a name="GoogleDocsPostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput"></a>

```csharp
public IResolvable|IncidentPostmortemTemplateGoogleDocsPostmortemSettings GoogleDocsPostmortemSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput"></a>

```csharp
public string IncidentTypeInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput"></a>

```csharp
public bool|IResolvable IsDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault"></a>

```csharp
public bool|IResolvable IsDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentPostmortemTemplateConfig <a name="IncidentPostmortemTemplateConfig" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentPostmortemTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IncidentType,
    string Name,
    IncidentPostmortemTemplateConfluencePostmortemSettings ConfluencePostmortemSettings = null,
    string Content = null,
    IncidentPostmortemTemplateGoogleDocsPostmortemSettings GoogleDocsPostmortemSettings = null,
    bool|IResolvable IsDefault = null,
    string Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType">IncidentType</a></code> | <code>string</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings">ConfluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content">Content</a></code> | <code>string</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings">GoogleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault">IsDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType"></a>

```csharp
public string IncidentType { get; set; }
```

- *Type:* string

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `ConfluencePostmortemSettings`<sup>Optional</sup> <a name="ConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings"></a>

```csharp
public IncidentPostmortemTemplateConfluencePostmortemSettings ConfluencePostmortemSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `GoogleDocsPostmortemSettings`<sup>Optional</sup> <a name="GoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings"></a>

```csharp
public IncidentPostmortemTemplateGoogleDocsPostmortemSettings GoogleDocsPostmortemSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault"></a>

```csharp
public bool|IResolvable IsDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

### IncidentPostmortemTemplateConfluencePostmortemSettings <a name="IncidentPostmortemTemplateConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentPostmortemTemplateConfluencePostmortemSettings {
    string AccountId = null,
    string ParentId = null,
    string SpaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId">AccountId</a></code> | <code>string</code> | The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId">ParentId</a></code> | <code>string</code> | The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId">SpaceId</a></code> | <code>string</code> | The Confluence space key (e.g. `ENG`), not a numeric space ID. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}

---

##### `SpaceId`<sup>Optional</sup> <a name="SpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId"></a>

```csharp
public string SpaceId { get; set; }
```

- *Type:* string

The Confluence space key (e.g. `ENG`), not a numeric space ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}

---

### IncidentPostmortemTemplateGoogleDocsPostmortemSettings <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentPostmortemTemplateGoogleDocsPostmortemSettings {
    string AccountId = null,
    string ParentFolderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId">AccountId</a></code> | <code>string</code> | The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId">ParentFolderId</a></code> | <code>string</code> | The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`). |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `ParentFolderId`<sup>Optional</sup> <a name="ParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId"></a>

```csharp
public string ParentFolderId { get; set; }
```

- *Type:* string

The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId">ResetSpaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId"></a>

```csharp
private void ResetParentId()
```

##### `ResetSpaceId` <a name="ResetSpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId"></a>

```csharp
private void ResetSpaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput"></a>

```csharp
public string SpaceIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IncidentPostmortemTemplateConfluencePostmortemSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---


### IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId">ResetParentFolderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetParentFolderId` <a name="ResetParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId"></a>

```csharp
private void ResetParentFolderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput">ParentFolderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId">ParentFolderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ParentFolderIdInput`<sup>Optional</sup> <a name="ParentFolderIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput"></a>

```csharp
public string ParentFolderIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ParentFolderId`<sup>Required</sup> <a name="ParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId"></a>

```csharp
public string ParentFolderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IncidentPostmortemTemplateGoogleDocsPostmortemSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---



