# `tagIndexingRule` Submodule <a name="`tagIndexingRule` Submodule" id="@cdktn/provider-datadog.tagIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagIndexingRule <a name="TagIndexingRule" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRule(Construct Scope, string Id, TagIndexingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig">TagIndexingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig">TagIndexingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode">ResetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches">ResetIgnoredMetricNameMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions"></a>

```csharp
private void PutOptions(TagIndexingRuleOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `ResetExcludeTagsMode` <a name="ResetExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode"></a>

```csharp
private void ResetExcludeTagsMode()
```

##### `ResetIgnoredMetricNameMatches` <a name="ResetIgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches"></a>

```csharp
private void ResetIgnoredMetricNameMatches()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TagIndexingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TagIndexingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TagIndexingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TagIndexingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagIndexingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TagIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle">CreatedByHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle">ModifiedByHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder">RuleOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput">ExcludeTagsModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput">IgnoredMetricNameMatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput">MetricNameMatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches">IgnoredMetricNameMatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches">MetricNameMatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedByHandle`<sup>Required</sup> <a name="CreatedByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle"></a>

```csharp
public string CreatedByHandle { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ModifiedByHandle`<sup>Required</sup> <a name="ModifiedByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle"></a>

```csharp
public string ModifiedByHandle { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options"></a>

```csharp
public TagIndexingRuleOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a>

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder"></a>

```csharp
public double RuleOrder { get; }
```

- *Type:* double

---

##### `ExcludeTagsModeInput`<sup>Optional</sup> <a name="ExcludeTagsModeInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput"></a>

```csharp
public bool|IResolvable ExcludeTagsModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoredMetricNameMatchesInput`<sup>Optional</sup> <a name="IgnoredMetricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput"></a>

```csharp
public string[] IgnoredMetricNameMatchesInput { get; }
```

- *Type:* string[]

---

##### `MetricNameMatchesInput`<sup>Optional</sup> <a name="MetricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput"></a>

```csharp
public string[] MetricNameMatchesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput"></a>

```csharp
public IResolvable|TagIndexingRuleOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ExcludeTagsMode`<sup>Required</sup> <a name="ExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode"></a>

```csharp
public bool|IResolvable ExcludeTagsMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoredMetricNameMatches`<sup>Required</sup> <a name="IgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches"></a>

```csharp
public string[] IgnoredMetricNameMatches { get; }
```

- *Type:* string[]

---

##### `MetricNameMatches`<sup>Required</sup> <a name="MetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches"></a>

```csharp
public string[] MetricNameMatches { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagIndexingRuleConfig <a name="TagIndexingRuleConfig" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] MetricNameMatches,
    string Name,
    bool|IResolvable ExcludeTagsMode = null,
    string[] IgnoredMetricNameMatches = null,
    TagIndexingRuleOptions Options = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches">MetricNameMatches</a></code> | <code>string[]</code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name">Name</a></code> | <code>string</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches">IgnoredMetricNameMatches</a></code> | <code>string[]</code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MetricNameMatches`<sup>Required</sup> <a name="MetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches"></a>

```csharp
public string[] MetricNameMatches { get; set; }
```

- *Type:* string[]

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `ExcludeTagsMode`<sup>Optional</sup> <a name="ExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode"></a>

```csharp
public bool|IResolvable ExcludeTagsMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `IgnoredMetricNameMatches`<sup>Optional</sup> <a name="IgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches"></a>

```csharp
public string[] IgnoredMetricNameMatches { get; set; }
```

- *Type:* string[]

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options"></a>

```csharp
public TagIndexingRuleOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

### TagIndexingRuleOptions <a name="TagIndexingRuleOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptions {
    TagIndexingRuleOptionsData Data,
    double Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data">Data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | Behavioral options for how the rule applies to metrics, including backfill and override behavior. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version">Version</a></code> | <code>double</code> | Options schema version. Only `1` is supported. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data"></a>

```csharp
public TagIndexingRuleOptionsData Data { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

Behavioral options for how the rule applies to metrics, including backfill and override behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Options schema version. Only `1` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}

---

### TagIndexingRuleOptionsData <a name="TagIndexingRuleOptionsData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsData {
    TagIndexingRuleOptionsDataDynamicTags DynamicTags = null,
    bool|IResolvable ManagePreexistingMetrics = null,
    TagIndexingRuleOptionsDataMetricMatch MetricMatch = null,
    bool|IResolvable OverridePreviousRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags">DynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | Configuration for including dynamically queried tags. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics">ManagePreexistingMetrics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch">MetricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | Criteria for matching metrics based on query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules">OverridePreviousRules</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`. |

---

##### `DynamicTags`<sup>Optional</sup> <a name="DynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags"></a>

```csharp
public TagIndexingRuleOptionsDataDynamicTags DynamicTags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

Configuration for including dynamically queried tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}

---

##### `ManagePreexistingMetrics`<sup>Optional</sup> <a name="ManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics"></a>

```csharp
public bool|IResolvable ManagePreexistingMetrics { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}

---

##### `MetricMatch`<sup>Optional</sup> <a name="MetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch"></a>

```csharp
public TagIndexingRuleOptionsDataMetricMatch MetricMatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

Criteria for matching metrics based on query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_match TagIndexingRule#metric_match}

---

##### `OverridePreviousRules`<sup>Optional</sup> <a name="OverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules"></a>

```csharp
public bool|IResolvable OverridePreviousRules { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}

---

### TagIndexingRuleOptionsDataDynamicTags <a name="TagIndexingRuleOptionsDataDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsDataDynamicTags {
    double QueriedTagsWindowSeconds = null,
    bool|IResolvable RelatedAssetTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds">QueriedTagsWindowSeconds</a></code> | <code>double</code> | Lookback window for determining which tags were recently queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags">RelatedAssetTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, tags from related assets are included. |

---

##### `QueriedTagsWindowSeconds`<sup>Optional</sup> <a name="QueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds"></a>

```csharp
public double QueriedTagsWindowSeconds { get; set; }
```

- *Type:* double

Lookback window for determining which tags were recently queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#queried_tags_window_seconds TagIndexingRule#queried_tags_window_seconds}

---

##### `RelatedAssetTags`<sup>Optional</sup> <a name="RelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags"></a>

```csharp
public bool|IResolvable RelatedAssetTags { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, tags from related assets are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#related_asset_tags TagIndexingRule#related_asset_tags}

---

### TagIndexingRuleOptionsDataMetricMatch <a name="TagIndexingRuleOptionsDataMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsDataMetricMatch {
    bool|IResolvable IsQueried = null,
    bool|IResolvable NotQueried = null,
    bool|IResolvable NotUsedInAssets = null,
    double QueriedWindowSeconds = null,
    bool|IResolvable UsedInAssets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried">IsQueried</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Match metrics that are being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried">NotQueried</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Match metrics that are not being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets">NotUsedInAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Match metrics not used in any dashboards or monitors. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds">QueriedWindowSeconds</a></code> | <code>double</code> | Window in seconds for evaluating query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets">UsedInAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Match metrics used in dashboards or monitors. |

---

##### `IsQueried`<sup>Optional</sup> <a name="IsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried"></a>

```csharp
public bool|IResolvable IsQueried { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Match metrics that are being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#is_queried TagIndexingRule#is_queried}

---

##### `NotQueried`<sup>Optional</sup> <a name="NotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried"></a>

```csharp
public bool|IResolvable NotQueried { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Match metrics that are not being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#not_queried TagIndexingRule#not_queried}

---

##### `NotUsedInAssets`<sup>Optional</sup> <a name="NotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets"></a>

```csharp
public bool|IResolvable NotUsedInAssets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Match metrics not used in any dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#not_used_in_assets TagIndexingRule#not_used_in_assets}

---

##### `QueriedWindowSeconds`<sup>Optional</sup> <a name="QueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds"></a>

```csharp
public double QueriedWindowSeconds { get; set; }
```

- *Type:* double

Window in seconds for evaluating query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#queried_window_seconds TagIndexingRule#queried_window_seconds}

---

##### `UsedInAssets`<sup>Optional</sup> <a name="UsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets"></a>

```csharp
public bool|IResolvable UsedInAssets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Match metrics used in dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#used_in_assets TagIndexingRule#used_in_assets}

---

## Classes <a name="Classes" id="Classes"></a>

### TagIndexingRuleOptionsDataDynamicTagsOutputReference <a name="TagIndexingRuleOptionsDataDynamicTagsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsDataDynamicTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds">ResetQueriedTagsWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags">ResetRelatedAssetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueriedTagsWindowSeconds` <a name="ResetQueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds"></a>

```csharp
private void ResetQueriedTagsWindowSeconds()
```

##### `ResetRelatedAssetTags` <a name="ResetRelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags"></a>

```csharp
private void ResetRelatedAssetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput">QueriedTagsWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput">RelatedAssetTagsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds">QueriedTagsWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags">RelatedAssetTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueriedTagsWindowSecondsInput`<sup>Optional</sup> <a name="QueriedTagsWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput"></a>

```csharp
public double QueriedTagsWindowSecondsInput { get; }
```

- *Type:* double

---

##### `RelatedAssetTagsInput`<sup>Optional</sup> <a name="RelatedAssetTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput"></a>

```csharp
public bool|IResolvable RelatedAssetTagsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueriedTagsWindowSeconds`<sup>Required</sup> <a name="QueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds"></a>

```csharp
public double QueriedTagsWindowSeconds { get; }
```

- *Type:* double

---

##### `RelatedAssetTags`<sup>Required</sup> <a name="RelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags"></a>

```csharp
public bool|IResolvable RelatedAssetTags { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagIndexingRuleOptionsDataDynamicTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---


### TagIndexingRuleOptionsDataMetricMatchOutputReference <a name="TagIndexingRuleOptionsDataMetricMatchOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsDataMetricMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried">ResetIsQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried">ResetNotQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets">ResetNotUsedInAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds">ResetQueriedWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets">ResetUsedInAssets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsQueried` <a name="ResetIsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried"></a>

```csharp
private void ResetIsQueried()
```

##### `ResetNotQueried` <a name="ResetNotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried"></a>

```csharp
private void ResetNotQueried()
```

##### `ResetNotUsedInAssets` <a name="ResetNotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets"></a>

```csharp
private void ResetNotUsedInAssets()
```

##### `ResetQueriedWindowSeconds` <a name="ResetQueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds"></a>

```csharp
private void ResetQueriedWindowSeconds()
```

##### `ResetUsedInAssets` <a name="ResetUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets"></a>

```csharp
private void ResetUsedInAssets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput">IsQueriedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput">NotQueriedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput">NotUsedInAssetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput">QueriedWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput">UsedInAssetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried">IsQueried</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried">NotQueried</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets">NotUsedInAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds">QueriedWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets">UsedInAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsQueriedInput`<sup>Optional</sup> <a name="IsQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput"></a>

```csharp
public bool|IResolvable IsQueriedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotQueriedInput`<sup>Optional</sup> <a name="NotQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput"></a>

```csharp
public bool|IResolvable NotQueriedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotUsedInAssetsInput`<sup>Optional</sup> <a name="NotUsedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput"></a>

```csharp
public bool|IResolvable NotUsedInAssetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueriedWindowSecondsInput`<sup>Optional</sup> <a name="QueriedWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput"></a>

```csharp
public double QueriedWindowSecondsInput { get; }
```

- *Type:* double

---

##### `UsedInAssetsInput`<sup>Optional</sup> <a name="UsedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput"></a>

```csharp
public bool|IResolvable UsedInAssetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsQueried`<sup>Required</sup> <a name="IsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried"></a>

```csharp
public bool|IResolvable IsQueried { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotQueried`<sup>Required</sup> <a name="NotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried"></a>

```csharp
public bool|IResolvable NotQueried { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotUsedInAssets`<sup>Required</sup> <a name="NotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets"></a>

```csharp
public bool|IResolvable NotUsedInAssets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueriedWindowSeconds`<sup>Required</sup> <a name="QueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds"></a>

```csharp
public double QueriedWindowSeconds { get; }
```

- *Type:* double

---

##### `UsedInAssets`<sup>Required</sup> <a name="UsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets"></a>

```csharp
public bool|IResolvable UsedInAssets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagIndexingRuleOptionsDataMetricMatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---


### TagIndexingRuleOptionsDataOutputReference <a name="TagIndexingRuleOptionsDataOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags">PutDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch">PutMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags">ResetDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics">ResetManagePreexistingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch">ResetMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules">ResetOverridePreviousRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicTags` <a name="PutDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags"></a>

```csharp
private void PutDynamicTags(TagIndexingRuleOptionsDataDynamicTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `PutMetricMatch` <a name="PutMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch"></a>

```csharp
private void PutMetricMatch(TagIndexingRuleOptionsDataMetricMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `ResetDynamicTags` <a name="ResetDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags"></a>

```csharp
private void ResetDynamicTags()
```

##### `ResetManagePreexistingMetrics` <a name="ResetManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics"></a>

```csharp
private void ResetManagePreexistingMetrics()
```

##### `ResetMetricMatch` <a name="ResetMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch"></a>

```csharp
private void ResetMetricMatch()
```

##### `ResetOverridePreviousRules` <a name="ResetOverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules"></a>

```csharp
private void ResetOverridePreviousRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags">DynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch">MetricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput">DynamicTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput">ManagePreexistingMetricsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput">MetricMatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput">OverridePreviousRulesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics">ManagePreexistingMetrics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules">OverridePreviousRules</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicTags`<sup>Required</sup> <a name="DynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags"></a>

```csharp
public TagIndexingRuleOptionsDataDynamicTagsOutputReference DynamicTags { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a>

---

##### `MetricMatch`<sup>Required</sup> <a name="MetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch"></a>

```csharp
public TagIndexingRuleOptionsDataMetricMatchOutputReference MetricMatch { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a>

---

##### `DynamicTagsInput`<sup>Optional</sup> <a name="DynamicTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput"></a>

```csharp
public IResolvable|TagIndexingRuleOptionsDataDynamicTags DynamicTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `ManagePreexistingMetricsInput`<sup>Optional</sup> <a name="ManagePreexistingMetricsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput"></a>

```csharp
public bool|IResolvable ManagePreexistingMetricsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MetricMatchInput`<sup>Optional</sup> <a name="MetricMatchInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput"></a>

```csharp
public IResolvable|TagIndexingRuleOptionsDataMetricMatch MetricMatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `OverridePreviousRulesInput`<sup>Optional</sup> <a name="OverridePreviousRulesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput"></a>

```csharp
public bool|IResolvable OverridePreviousRulesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManagePreexistingMetrics`<sup>Required</sup> <a name="ManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics"></a>

```csharp
public bool|IResolvable ManagePreexistingMetrics { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverridePreviousRules`<sup>Required</sup> <a name="OverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules"></a>

```csharp
public bool|IResolvable OverridePreviousRules { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagIndexingRuleOptionsData InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


### TagIndexingRuleOptionsOutputReference <a name="TagIndexingRuleOptionsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TagIndexingRuleOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData">PutData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutData` <a name="PutData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData"></a>

```csharp
private void PutData(TagIndexingRuleOptionsData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data">Data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput">DataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data"></a>

```csharp
public TagIndexingRuleOptionsDataOutputReference Data { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput"></a>

```csharp
public IResolvable|TagIndexingRuleOptionsData DataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagIndexingRuleOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---



