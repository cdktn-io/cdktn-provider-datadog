# `dataDatadogIncidentNotificationRule` Submodule <a name="`dataDatadogIncidentNotificationRule` Submodule" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIncidentNotificationRule <a name="DataDatadogIncidentNotificationRule" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIncidentNotificationRule(Construct Scope, string Id, DataDatadogIncidentNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig">DataDatadogIncidentNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig">DataDatadogIncidentNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions">ResetConditions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions"></a>

```csharp
private void PutConditions(IResolvable|DataDatadogIncidentNotificationRuleConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions"></a>

```csharp
private void ResetConditions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIncidentNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIncidentNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIncidentNotificationRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIncidentNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIncidentNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogIncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles">Handles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate">NotificationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn">RenotifyOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger">Trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions"></a>

```csharp
public DataDatadogIncidentNotificationRuleConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Handles`<sup>Required</sup> <a name="Handles" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles"></a>

```csharp
public string[] Handles { get; }
```

- *Type:* string[]

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `NotificationTemplate`<sup>Required</sup> <a name="NotificationTemplate" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate"></a>

```csharp
public string NotificationTemplate { get; }
```

- *Type:* string

---

##### `RenotifyOn`<sup>Required</sup> <a name="RenotifyOn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn"></a>

```csharp
public string[] RenotifyOn { get; }
```

- *Type:* string[]

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger"></a>

```csharp
public string Trigger { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput"></a>

```csharp
public IResolvable|DataDatadogIncidentNotificationRuleConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIncidentNotificationRuleConditions <a name="DataDatadogIncidentNotificationRuleConditions" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIncidentNotificationRuleConditions {

};
```


### DataDatadogIncidentNotificationRuleConfig <a name="DataDatadogIncidentNotificationRuleConfig" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIncidentNotificationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    IResolvable|DataDatadogIncidentNotificationRuleConditions[] Conditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id">Id</a></code> | <code>string</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]</code> | conditions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions"></a>

```csharp
public IResolvable|DataDatadogIncidentNotificationRuleConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIncidentNotificationRuleConditionsList <a name="DataDatadogIncidentNotificationRuleConditionsList" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIncidentNotificationRuleConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get"></a>

```csharp
private DataDatadogIncidentNotificationRuleConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogIncidentNotificationRuleConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

---


### DataDatadogIncidentNotificationRuleConditionsOutputReference <a name="DataDatadogIncidentNotificationRuleConditionsOutputReference" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIncidentNotificationRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogIncidentNotificationRuleConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>

---



