# `dataDatadogTeamNotificationRule` Submodule <a name="`dataDatadogTeamNotificationRule` Submodule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamNotificationRule <a name="DataDatadogTeamNotificationRule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRule(Construct Scope, string Id, DataDatadogTeamNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig">DataDatadogTeamNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig">DataDatadogTeamNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogTeamNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogTeamNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogTeamNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogTeamNotificationRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogTeamNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogTeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogTeamNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogTeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference">DataDatadogTeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.msTeams">MsTeams</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference">DataDatadogTeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference">DataDatadogTeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference">DataDatadogTeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.email"></a>

```csharp
public DataDatadogTeamNotificationRuleEmailOutputReference Email { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference">DataDatadogTeamNotificationRuleEmailOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MsTeams`<sup>Required</sup> <a name="MsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.msTeams"></a>

```csharp
public DataDatadogTeamNotificationRuleMsTeamsOutputReference MsTeams { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference">DataDatadogTeamNotificationRuleMsTeamsOutputReference</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.pagerduty"></a>

```csharp
public DataDatadogTeamNotificationRulePagerdutyOutputReference Pagerduty { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference">DataDatadogTeamNotificationRulePagerdutyOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.slack"></a>

```csharp
public DataDatadogTeamNotificationRuleSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference">DataDatadogTeamNotificationRuleSlackOutputReference</a>

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamNotificationRuleConfig <a name="DataDatadogTeamNotificationRuleConfig" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RuleId,
    string TeamId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.ruleId">RuleId</a></code> | <code>string</code> | The notification rule ID to fetch. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.teamId">TeamId</a></code> | <code>string</code> | The team ID to fetch the notification rule for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

The notification rule ID to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/team_notification_rule#rule_id DataDatadogTeamNotificationRule#rule_id}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

The team ID to fetch the notification rule for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/team_notification_rule#team_id DataDatadogTeamNotificationRule#team_id}

---

### DataDatadogTeamNotificationRuleEmail <a name="DataDatadogTeamNotificationRuleEmail" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleEmail {

};
```


### DataDatadogTeamNotificationRuleMsTeams <a name="DataDatadogTeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleMsTeams {

};
```


### DataDatadogTeamNotificationRulePagerduty <a name="DataDatadogTeamNotificationRulePagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRulePagerduty {

};
```


### DataDatadogTeamNotificationRuleSlack <a name="DataDatadogTeamNotificationRuleSlack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleSlack {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamNotificationRuleEmailOutputReference <a name="DataDatadogTeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail">DataDatadogTeamNotificationRuleEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTeamNotificationRuleEmail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail">DataDatadogTeamNotificationRuleEmail</a>

---


### DataDatadogTeamNotificationRuleMsTeamsOutputReference <a name="DataDatadogTeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleMsTeamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.connectorName">ConnectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams">DataDatadogTeamNotificationRuleMsTeams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```csharp
public string ConnectorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTeamNotificationRuleMsTeams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams">DataDatadogTeamNotificationRuleMsTeams</a>

---


### DataDatadogTeamNotificationRulePagerdutyOutputReference <a name="DataDatadogTeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRulePagerdutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty">DataDatadogTeamNotificationRulePagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTeamNotificationRulePagerduty InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty">DataDatadogTeamNotificationRulePagerduty</a>

---


### DataDatadogTeamNotificationRuleSlackOutputReference <a name="DataDatadogTeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogTeamNotificationRuleSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack">DataDatadogTeamNotificationRuleSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTeamNotificationRuleSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack">DataDatadogTeamNotificationRuleSlack</a>

---



