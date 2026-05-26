# `dataDatadogIntegrationAwsLogsServices` Submodule <a name="`dataDatadogIntegrationAwsLogsServices` Submodule" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsLogsServices <a name="DataDatadogIntegrationAwsLogsServices" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/integration_aws_logs_services datadog_integration_aws_logs_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIntegrationAwsLogsServices(Construct Scope, string Id, DataDatadogIntegrationAwsLogsServicesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig">DataDatadogIntegrationAwsLogsServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig">DataDatadogIntegrationAwsLogsServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogIntegrationAwsLogsServices resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIntegrationAwsLogsServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIntegrationAwsLogsServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIntegrationAwsLogsServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogIntegrationAwsLogsServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogIntegrationAwsLogsServices resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIntegrationAwsLogsServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIntegrationAwsLogsServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/integration_aws_logs_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogIntegrationAwsLogsServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.awsLogsServices">AwsLogsServices</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList">DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AwsLogsServices`<sup>Required</sup> <a name="AwsLogsServices" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.awsLogsServices"></a>

```csharp
public DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList AwsLogsServices { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList">DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsLogsServicesAwsLogsServices <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServices" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIntegrationAwsLogsServicesAwsLogsServices {

};
```


### DataDatadogIntegrationAwsLogsServicesConfig <a name="DataDatadogIntegrationAwsLogsServicesConfig" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIntegrationAwsLogsServicesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get"></a>

```csharp
private DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices">DataDatadogIntegrationAwsLogsServicesAwsLogsServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogIntegrationAwsLogsServicesAwsLogsServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices">DataDatadogIntegrationAwsLogsServicesAwsLogsServices</a>

---



