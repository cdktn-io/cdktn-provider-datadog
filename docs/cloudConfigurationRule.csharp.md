# `cloudConfigurationRule` Submodule <a name="`cloudConfigurationRule` Submodule" id="@cdktn/provider-datadog.cloudConfigurationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigurationRule <a name="CloudConfigurationRule" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule datadog_cloud_configuration_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudConfigurationRule(Construct Scope, string Id, CloudConfigurationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig">CloudConfigurationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig">CloudConfigurationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes">ResetRelatedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.putFilter"></a>

```csharp
private void PutFilter(IResolvable|CloudConfigurationRuleFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetRelatedResourceTypes` <a name="ResetRelatedResourceTypes" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes"></a>

```csharp
private void ResetRelatedResourceTypes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudConfigurationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudConfigurationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudConfigurationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudConfigurationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CloudConfigurationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudConfigurationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudConfigurationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudConfigurationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudConfigurationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList">CloudConfigurationRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput">GroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput">NotificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput">RelatedResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications">Notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes">RelatedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filter"></a>

```csharp
public CloudConfigurationRuleFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList">CloudConfigurationRuleFilterList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filterInput"></a>

```csharp
public IResolvable|CloudConfigurationRuleFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput"></a>

```csharp
public string[] GroupByInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput"></a>

```csharp
public string[] NotificationsInput { get; }
```

- *Type:* string[]

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RelatedResourceTypesInput`<sup>Optional</sup> <a name="RelatedResourceTypesInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput"></a>

```csharp
public string[] RelatedResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications"></a>

```csharp
public string[] Notifications { get; }
```

- *Type:* string[]

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `RelatedResourceTypes`<sup>Required</sup> <a name="RelatedResourceTypes" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes"></a>

```csharp
public string[] RelatedResourceTypes { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigurationRuleConfig <a name="CloudConfigurationRuleConfig" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudConfigurationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled,
    string Message,
    string Name,
    string Policy,
    string ResourceType,
    string Severity,
    IResolvable|CloudConfigurationRuleFilter[] Filter = null,
    string[] GroupBy = null,
    string Id = null,
    string[] Notifications = null,
    string[] RelatedResourceTypes = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the cloud configuration rule is enabled. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message">Message</a></code> | <code>string</code> | The message associated to the rule that will be shown in findings and signals. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the cloud configuration rule. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy">Policy</a></code> | <code>string</code> | Policy written in Rego format. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Main resource type to be checked by the rule. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity">Severity</a></code> | <code>string</code> | Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy">GroupBy</a></code> | <code>string[]</code> | Defaults to empty list. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications">Notifications</a></code> | <code>string[]</code> | This function will be deprecated soon. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes">RelatedResourceTypes</a></code> | <code>string[]</code> | Related resource types to be checked by the rule. Defaults to empty list. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags of the rule, propagated to findings and signals. Defaults to empty list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the cloud configuration rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#enabled CloudConfigurationRule#enabled}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

The message associated to the rule that will be shown in findings and signals.

For cloud configuration rules, the message is rendered in the finding side panel. When the message is written as Markdown, you can use the following top-level section headers to control where each part appears in the finding: `Description` and `Rationale` appear under **What Happened**, `Remediation` appears in its own **Remediation** section, and `References` are shown separately. All of these sections are optional and can appear in any order; a typical message uses only `Description` and `Remediation`. Use level-2 (`##`) headers for each section. If none of these headers are present, the entire message is shown as the description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#message CloudConfigurationRule#message}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the cloud configuration rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#name CloudConfigurationRule#name}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Policy written in Rego format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#policy CloudConfigurationRule#policy}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Main resource type to be checked by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#resource_type CloudConfigurationRule#resource_type}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#severity CloudConfigurationRule#severity}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.filter"></a>

```csharp
public IResolvable|CloudConfigurationRuleFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#filter CloudConfigurationRule#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy"></a>

```csharp
public string[] GroupBy { get; set; }
```

- *Type:* string[]

Defaults to empty list.

This function will be deprecated soon. Use the notification rules function instead. Fields to group by when generating signals, e.g.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications"></a>

```csharp
public string[] Notifications { get; set; }
```

- *Type:* string[]

This function will be deprecated soon.

Use the notification rules function instead. Notification targets for signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#notifications CloudConfigurationRule#notifications}

---

##### `RelatedResourceTypes`<sup>Optional</sup> <a name="RelatedResourceTypes" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes"></a>

```csharp
public string[] RelatedResourceTypes { get; set; }
```

- *Type:* string[]

Related resource types to be checked by the rule. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#related_resource_types CloudConfigurationRule#related_resource_types}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags of the rule, propagated to findings and signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#tags CloudConfigurationRule#tags}

---

### CloudConfigurationRuleFilter <a name="CloudConfigurationRuleFilter" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudConfigurationRuleFilter {
    string Action,
    string Query
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.action">Action</a></code> | <code>string</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.query">Query</a></code> | <code>string</code> | Query for selecting logs to apply the filtering action. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#action CloudConfigurationRule#action}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_configuration_rule#query CloudConfigurationRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConfigurationRuleFilterList <a name="CloudConfigurationRuleFilterList" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudConfigurationRuleFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.get"></a>

```csharp
private CloudConfigurationRuleFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.internalValue"></a>

```csharp
public IResolvable|CloudConfigurationRuleFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

---


### CloudConfigurationRuleFilterOutputReference <a name="CloudConfigurationRuleFilterOutputReference" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CloudConfigurationRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudConfigurationRuleFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>

---



