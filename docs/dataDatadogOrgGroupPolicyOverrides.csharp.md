# `dataDatadogOrgGroupPolicyOverrides` Submodule <a name="`dataDatadogOrgGroupPolicyOverrides` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupPolicyOverrides <a name="DataDatadogOrgGroupPolicyOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_policy_overrides datadog_org_group_policy_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrgGroupPolicyOverrides(Construct Scope, string Id, DataDatadogOrgGroupPolicyOverridesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig">DataDatadogOrgGroupPolicyOverridesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig">DataDatadogOrgGroupPolicyOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid">ResetOrgUuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetOrgUuid` <a name="ResetOrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid"></a>

```csharp
private void ResetOrgUuid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrgGroupPolicyOverrides.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrgGroupPolicyOverrides.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrgGroupPolicyOverrides.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrgGroupPolicyOverrides.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogOrgGroupPolicyOverrides to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogOrgGroupPolicyOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_policy_overrides#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupPolicyOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput">OrgGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput">OrgUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId">OrgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid">OrgUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides"></a>

```csharp
public DataDatadogOrgGroupPolicyOverridesOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a>

---

##### `OrgGroupIdInput`<sup>Optional</sup> <a name="OrgGroupIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput"></a>

```csharp
public string OrgGroupIdInput { get; }
```

- *Type:* string

---

##### `OrgUuidInput`<sup>Optional</sup> <a name="OrgUuidInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput"></a>

```csharp
public string OrgUuidInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId"></a>

```csharp
public string OrgGroupId { get; }
```

- *Type:* string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid"></a>

```csharp
public string OrgUuid { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupPolicyOverridesConfig <a name="DataDatadogOrgGroupPolicyOverridesConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrgGroupPolicyOverridesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OrgGroupId,
    string OrgUuid = null,
    string PolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId">OrgGroupId</a></code> | <code>string</code> | The UUID of the org group whose overrides to list. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid">OrgUuid</a></code> | <code>string</code> | Filter overrides to those for the given organization. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Filter overrides to those on the given policy. Must be a valid UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId"></a>

```csharp
public string OrgGroupId { get; set; }
```

- *Type:* string

The UUID of the org group whose overrides to list. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_policy_overrides#org_group_id DataDatadogOrgGroupPolicyOverrides#org_group_id}

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid"></a>

```csharp
public string OrgUuid { get; set; }
```

- *Type:* string

Filter overrides to those for the given organization.

Applied client-side after the List call because the API does not accept an `org_uuid` filter on this endpoint. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_policy_overrides#org_uuid DataDatadogOrgGroupPolicyOverrides#org_uuid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Filter overrides to those on the given policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_policy_overrides#policy_id DataDatadogOrgGroupPolicyOverrides#policy_id}

---

### DataDatadogOrgGroupPolicyOverridesOverrides <a name="DataDatadogOrgGroupPolicyOverridesOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrgGroupPolicyOverridesOverrides {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupPolicyOverridesOverridesList <a name="DataDatadogOrgGroupPolicyOverridesOverridesList" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrgGroupPolicyOverridesOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get"></a>

```csharp
private DataDatadogOrgGroupPolicyOverridesOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogOrgGroupPolicyOverridesOverridesOutputReference <a name="DataDatadogOrgGroupPolicyOverridesOverridesOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrgGroupPolicyOverridesOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId">OrgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite">OrgSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid">OrgUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId"></a>

```csharp
public string OrgGroupId { get; }
```

- *Type:* string

---

##### `OrgSite`<sup>Required</sup> <a name="OrgSite" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite"></a>

```csharp
public string OrgSite { get; }
```

- *Type:* string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid"></a>

```csharp
public string OrgUuid { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogOrgGroupPolicyOverridesOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a>

---



