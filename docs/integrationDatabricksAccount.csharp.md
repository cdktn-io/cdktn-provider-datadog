# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccount(Construct Scope, string Id, IntegrationDatabricksAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration">PutPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled">ResetCcmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId">ResetDdApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret">ResetDdApiKeySecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled">ResetDjmClusterPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled">ResetDjmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled">ResetDjmGlobalInitScriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron">ResetDoCrawlersCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled">ResetDoEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName">ResetModelServingEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled">ResetModelServingMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration">ResetPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled">ResetScriptGpumEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled">ResetScriptLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled">ResetServerlessJobsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId">ResetSystemTablesSqlWarehouseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled">ResetTableLineageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath">ResetUcVolumePath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig"></a>

```csharp
private void PutAuthConfig(IntegrationDatabricksAccountAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `PutPrivateActionRunnerConfiguration` <a name="PutPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration"></a>

```csharp
private void PutPrivateActionRunnerConfiguration(IntegrationDatabricksAccountPrivateActionRunnerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig"></a>

```csharp
private void ResetAuthConfig()
```

##### `ResetCcmEnabled` <a name="ResetCcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled"></a>

```csharp
private void ResetCcmEnabled()
```

##### `ResetDdApiKeyId` <a name="ResetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId"></a>

```csharp
private void ResetDdApiKeyId()
```

##### `ResetDdApiKeySecret` <a name="ResetDdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret"></a>

```csharp
private void ResetDdApiKeySecret()
```

##### `ResetDjmClusterPolicyEnabled` <a name="ResetDjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled"></a>

```csharp
private void ResetDjmClusterPolicyEnabled()
```

##### `ResetDjmEnabled` <a name="ResetDjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled"></a>

```csharp
private void ResetDjmEnabled()
```

##### `ResetDjmGlobalInitScriptEnabled` <a name="ResetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled"></a>

```csharp
private void ResetDjmGlobalInitScriptEnabled()
```

##### `ResetDoCrawlersCron` <a name="ResetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron"></a>

```csharp
private void ResetDoCrawlersCron()
```

##### `ResetDoEnabled` <a name="ResetDoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled"></a>

```csharp
private void ResetDoEnabled()
```

##### `ResetModelServingEndpointName` <a name="ResetModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName"></a>

```csharp
private void ResetModelServingEndpointName()
```

##### `ResetModelServingMetricsEnabled` <a name="ResetModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled"></a>

```csharp
private void ResetModelServingMetricsEnabled()
```

##### `ResetPrivateActionRunnerConfiguration` <a name="ResetPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration"></a>

```csharp
private void ResetPrivateActionRunnerConfiguration()
```

##### `ResetScriptGpumEnabled` <a name="ResetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled"></a>

```csharp
private void ResetScriptGpumEnabled()
```

##### `ResetScriptLogsEnabled` <a name="ResetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled"></a>

```csharp
private void ResetScriptLogsEnabled()
```

##### `ResetServerlessJobsEnabled` <a name="ResetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled"></a>

```csharp
private void ResetServerlessJobsEnabled()
```

##### `ResetSystemTablesSqlWarehouseId` <a name="ResetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId"></a>

```csharp
private void ResetSystemTablesSqlWarehouseId()
```

##### `ResetTableLineageEnabled` <a name="ResetTableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled"></a>

```csharp
private void ResetTableLineageEnabled()
```

##### `ResetUcVolumePath` <a name="ResetUcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath"></a>

```csharp
private void ResetUcVolumePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IntegrationDatabricksAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration">PrivateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput">AuthConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput">CcmEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput">DdApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput">DdApiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput">DjmClusterPolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput">DjmEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput">DjmGlobalInitScriptEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput">DoCrawlersCronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput">DoEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput">ModelServingEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput">ModelServingMetricsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput">PrivateActionRunnerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput">ScriptGpumEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput">ScriptLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput">ServerlessJobsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput">SystemTablesSqlWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput">TableLineageEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput">UcVolumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled">CcmEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId">DdApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret">DdApiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled">DjmClusterPolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled">DjmEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled">DoEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName">ModelServingEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled">ModelServingMetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled">TableLineageEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath">UcVolumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig"></a>

```csharp
public IntegrationDatabricksAccountAuthConfigOutputReference AuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateActionRunnerConfiguration`<sup>Required</sup> <a name="PrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration"></a>

```csharp
public IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference PrivateActionRunnerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a>

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthConfig AuthConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `CcmEnabledInput`<sup>Optional</sup> <a name="CcmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput"></a>

```csharp
public bool|IResolvable CcmEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DdApiKeyIdInput`<sup>Optional</sup> <a name="DdApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput"></a>

```csharp
public string DdApiKeyIdInput { get; }
```

- *Type:* string

---

##### `DdApiKeySecretInput`<sup>Optional</sup> <a name="DdApiKeySecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput"></a>

```csharp
public string DdApiKeySecretInput { get; }
```

- *Type:* string

---

##### `DjmClusterPolicyEnabledInput`<sup>Optional</sup> <a name="DjmClusterPolicyEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput"></a>

```csharp
public bool|IResolvable DjmClusterPolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DjmEnabledInput`<sup>Optional</sup> <a name="DjmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput"></a>

```csharp
public bool|IResolvable DjmEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DjmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput"></a>

```csharp
public bool|IResolvable DjmGlobalInitScriptEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoCrawlersCronInput`<sup>Optional</sup> <a name="DoCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput"></a>

```csharp
public string DoCrawlersCronInput { get; }
```

- *Type:* string

---

##### `DoEnabledInput`<sup>Optional</sup> <a name="DoEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput"></a>

```csharp
public bool|IResolvable DoEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ModelServingEndpointNameInput`<sup>Optional</sup> <a name="ModelServingEndpointNameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput"></a>

```csharp
public string ModelServingEndpointNameInput { get; }
```

- *Type:* string

---

##### `ModelServingMetricsEnabledInput`<sup>Optional</sup> <a name="ModelServingMetricsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput"></a>

```csharp
public bool|IResolvable ModelServingMetricsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateActionRunnerConfigurationInput`<sup>Optional</sup> <a name="PrivateActionRunnerConfigurationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountPrivateActionRunnerConfiguration PrivateActionRunnerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `ScriptGpumEnabledInput`<sup>Optional</sup> <a name="ScriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput"></a>

```csharp
public bool|IResolvable ScriptGpumEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScriptLogsEnabledInput`<sup>Optional</sup> <a name="ScriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput"></a>

```csharp
public bool|IResolvable ScriptLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerlessJobsEnabledInput`<sup>Optional</sup> <a name="ServerlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput"></a>

```csharp
public bool|IResolvable ServerlessJobsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SystemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput"></a>

```csharp
public string SystemTablesSqlWarehouseIdInput { get; }
```

- *Type:* string

---

##### `TableLineageEnabledInput`<sup>Optional</sup> <a name="TableLineageEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput"></a>

```csharp
public bool|IResolvable TableLineageEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UcVolumePathInput`<sup>Optional</sup> <a name="UcVolumePathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput"></a>

```csharp
public string UcVolumePathInput { get; }
```

- *Type:* string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput"></a>

```csharp
public string WorkspaceUrlInput { get; }
```

- *Type:* string

---

##### `CcmEnabled`<sup>Required</sup> <a name="CcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled"></a>

```csharp
public bool|IResolvable CcmEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DdApiKeyId`<sup>Required</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId"></a>

```csharp
public string DdApiKeyId { get; }
```

- *Type:* string

---

##### `DdApiKeySecret`<sup>Required</sup> <a name="DdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret"></a>

```csharp
public string DdApiKeySecret { get; }
```

- *Type:* string

---

##### `DjmClusterPolicyEnabled`<sup>Required</sup> <a name="DjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled"></a>

```csharp
public bool|IResolvable DjmClusterPolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DjmEnabled`<sup>Required</sup> <a name="DjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled"></a>

```csharp
public bool|IResolvable DjmEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DjmGlobalInitScriptEnabled`<sup>Required</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled"></a>

```csharp
public bool|IResolvable DjmGlobalInitScriptEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoCrawlersCron`<sup>Required</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron"></a>

```csharp
public string DoCrawlersCron { get; }
```

- *Type:* string

---

##### `DoEnabled`<sup>Required</sup> <a name="DoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled"></a>

```csharp
public bool|IResolvable DoEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ModelServingEndpointName`<sup>Required</sup> <a name="ModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName"></a>

```csharp
public string ModelServingEndpointName { get; }
```

- *Type:* string

---

##### `ModelServingMetricsEnabled`<sup>Required</sup> <a name="ModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled"></a>

```csharp
public bool|IResolvable ModelServingMetricsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScriptGpumEnabled`<sup>Required</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled"></a>

```csharp
public bool|IResolvable ScriptGpumEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScriptLogsEnabled`<sup>Required</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled"></a>

```csharp
public bool|IResolvable ScriptLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerlessJobsEnabled`<sup>Required</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled"></a>

```csharp
public bool|IResolvable ServerlessJobsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SystemTablesSqlWarehouseId`<sup>Required</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId"></a>

```csharp
public string SystemTablesSqlWarehouseId { get; }
```

- *Type:* string

---

##### `TableLineageEnabled`<sup>Required</sup> <a name="TableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled"></a>

```csharp
public bool|IResolvable TableLineageEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UcVolumePath`<sup>Required</sup> <a name="UcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath"></a>

```csharp
public string UcVolumePath { get; }
```

- *Type:* string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthConfig <a name="IntegrationDatabricksAccountAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthConfig {
    IntegrationDatabricksAccountAuthConfigOauth Oauth = null,
    IntegrationDatabricksAccountAuthConfigPat Pat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | oauth block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat">Pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | pat block. |

---

##### `Oauth`<sup>Optional</sup> <a name="Oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth"></a>

```csharp
public IntegrationDatabricksAccountAuthConfigOauth Oauth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}

---

##### `Pat`<sup>Optional</sup> <a name="Pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat"></a>

```csharp
public IntegrationDatabricksAccountAuthConfigPat Pat { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

pat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}

---

### IntegrationDatabricksAccountAuthConfigOauth <a name="IntegrationDatabricksAccountAuthConfigOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthConfigOauth {
    string AzureTenantId = null,
    string ClientId = null,
    string ClientSecret = null,
    string DatabricksAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId">ClientId</a></code> | <code>string</code> | OAuth Client ID for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | OAuth Client Secret for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId">DatabricksAccountId</a></code> | <code>string</code> | Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner. |

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth Client ID for the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

OAuth Client Secret for the Databricks service principal.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}

---

##### `DatabricksAccountId`<sup>Optional</sup> <a name="DatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId"></a>

```csharp
public string DatabricksAccountId { get; set; }
```

- *Type:* string

Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}

---

### IntegrationDatabricksAccountAuthConfigPat <a name="IntegrationDatabricksAccountAuthConfigPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthConfigPat {
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token">Token</a></code> | <code>string</code> | Databricks Personal Access Token (PAT). |

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Databricks Personal Access Token (PAT).

Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string WorkspaceUrl,
    IntegrationDatabricksAccountAuthConfig AuthConfig = null,
    bool|IResolvable CcmEnabled = null,
    string DdApiKeyId = null,
    string DdApiKeySecret = null,
    bool|IResolvable DjmClusterPolicyEnabled = null,
    bool|IResolvable DjmEnabled = null,
    bool|IResolvable DjmGlobalInitScriptEnabled = null,
    string DoCrawlersCron = null,
    bool|IResolvable DoEnabled = null,
    string ModelServingEndpointName = null,
    bool|IResolvable ModelServingMetricsEnabled = null,
    IntegrationDatabricksAccountPrivateActionRunnerConfiguration PrivateActionRunnerConfiguration = null,
    bool|IResolvable ScriptGpumEnabled = null,
    bool|IResolvable ScriptLogsEnabled = null,
    bool|IResolvable ServerlessJobsEnabled = null,
    string SystemTablesSqlWarehouseId = null,
    bool|IResolvable TableLineageEnabled = null,
    string UcVolumePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">Name</a></code> | <code>string</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled">CcmEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId">DdApiKeyId</a></code> | <code>string</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret">DdApiKeySecret</a></code> | <code>string</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled">DjmClusterPolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled">DjmEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>string</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled">DoEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName">ModelServingEndpointName</a></code> | <code>string</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled">ModelServingMetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration">PrivateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>string</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled">TableLineageEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath">UcVolumePath</a></code> | <code>string</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; set; }
```

- *Type:* string

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig"></a>

```csharp
public IntegrationDatabricksAccountAuthConfig AuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `CcmEnabled`<sup>Optional</sup> <a name="CcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled"></a>

```csharp
public bool|IResolvable CcmEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `DdApiKeyId`<sup>Optional</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId"></a>

```csharp
public string DdApiKeyId { get; set; }
```

- *Type:* string

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `DdApiKeySecret`<sup>Optional</sup> <a name="DdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret"></a>

```csharp
public string DdApiKeySecret { get; set; }
```

- *Type:* string

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `DjmClusterPolicyEnabled`<sup>Optional</sup> <a name="DjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled"></a>

```csharp
public bool|IResolvable DjmClusterPolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `DjmEnabled`<sup>Optional</sup> <a name="DjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled"></a>

```csharp
public bool|IResolvable DjmEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `DjmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled"></a>

```csharp
public bool|IResolvable DjmGlobalInitScriptEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `DoCrawlersCron`<sup>Optional</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron"></a>

```csharp
public string DoCrawlersCron { get; set; }
```

- *Type:* string

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `DoEnabled`<sup>Optional</sup> <a name="DoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled"></a>

```csharp
public bool|IResolvable DoEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `ModelServingEndpointName`<sup>Optional</sup> <a name="ModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName"></a>

```csharp
public string ModelServingEndpointName { get; set; }
```

- *Type:* string

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `ModelServingMetricsEnabled`<sup>Optional</sup> <a name="ModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled"></a>

```csharp
public bool|IResolvable ModelServingMetricsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `PrivateActionRunnerConfiguration`<sup>Optional</sup> <a name="PrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration"></a>

```csharp
public IntegrationDatabricksAccountPrivateActionRunnerConfiguration PrivateActionRunnerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `ScriptGpumEnabled`<sup>Optional</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled"></a>

```csharp
public bool|IResolvable ScriptGpumEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `ScriptLogsEnabled`<sup>Optional</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled"></a>

```csharp
public bool|IResolvable ScriptLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `ServerlessJobsEnabled`<sup>Optional</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled"></a>

```csharp
public bool|IResolvable ServerlessJobsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `SystemTablesSqlWarehouseId`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId"></a>

```csharp
public string SystemTablesSqlWarehouseId { get; set; }
```

- *Type:* string

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `TableLineageEnabled`<sup>Optional</sup> <a name="TableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled"></a>

```csharp
public bool|IResolvable TableLineageEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `UcVolumePath`<sup>Optional</sup> <a name="UcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath"></a>

```csharp
public string UcVolumePath { get; set; }
```

- *Type:* string

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

### IntegrationDatabricksAccountPrivateActionRunnerConfiguration <a name="IntegrationDatabricksAccountPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountPrivateActionRunnerConfiguration {
    string ConnectionId = null,
    string SecretPath = null,
    string UserUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId">ConnectionId</a></code> | <code>string</code> | Private Action Runner connection ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath">SecretPath</a></code> | <code>string</code> | Path to the stored secret holding Databricks credentials inside the Private Action Runner. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid">UserUuid</a></code> | <code>string</code> | Service Account UUID used to execute Private Action Runner actions. |

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Private Action Runner connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `SecretPath`<sup>Optional</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath"></a>

```csharp
public string SecretPath { get; set; }
```

- *Type:* string

Path to the stored secret holding Databricks credentials inside the Private Action Runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

##### `UserUuid`<sup>Optional</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid"></a>

```csharp
public string UserUuid { get; set; }
```

- *Type:* string

Service Account UUID used to execute Private Action Runner actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthConfigOauthOutputReference <a name="IntegrationDatabricksAccountAuthConfigOauthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthConfigOauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId">ResetDatabricksAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDatabricksAccountId` <a name="ResetDatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId"></a>

```csharp
private void ResetDatabricksAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput">DatabricksAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId">DatabricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DatabricksAccountIdInput`<sup>Optional</sup> <a name="DatabricksAccountIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput"></a>

```csharp
public string DatabricksAccountIdInput { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DatabricksAccountId`<sup>Required</sup> <a name="DatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId"></a>

```csharp
public string DatabricksAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthConfigOauth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---


### IntegrationDatabricksAccountAuthConfigOutputReference <a name="IntegrationDatabricksAccountAuthConfigOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth">PutOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat">PutPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth">ResetOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat">ResetPat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth` <a name="PutOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth"></a>

```csharp
private void PutOauth(IntegrationDatabricksAccountAuthConfigOauth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `PutPat` <a name="PutPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat"></a>

```csharp
private void PutPat(IntegrationDatabricksAccountAuthConfigPat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `ResetOauth` <a name="ResetOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth"></a>

```csharp
private void ResetOauth()
```

##### `ResetPat` <a name="ResetPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat"></a>

```csharp
private void ResetPat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat">Pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput">OauthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput">PatInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth`<sup>Required</sup> <a name="Oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth"></a>

```csharp
public IntegrationDatabricksAccountAuthConfigOauthOutputReference Oauth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a>

---

##### `Pat`<sup>Required</sup> <a name="Pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat"></a>

```csharp
public IntegrationDatabricksAccountAuthConfigPatOutputReference Pat { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a>

---

##### `OauthInput`<sup>Optional</sup> <a name="OauthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthConfigOauth OauthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `PatInput`<sup>Optional</sup> <a name="PatInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthConfigPat PatInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---


### IntegrationDatabricksAccountAuthConfigPatOutputReference <a name="IntegrationDatabricksAccountAuthConfigPatOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountAuthConfigPatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountAuthConfigPat InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---


### IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference <a name="IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath">ResetSecretPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid">ResetUserUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetSecretPath` <a name="ResetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath"></a>

```csharp
private void ResetSecretPath()
```

##### `ResetUserUuid` <a name="ResetUserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid"></a>

```csharp
private void ResetUserUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput">SecretPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput">UserUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath">SecretPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid">UserUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `SecretPathInput`<sup>Optional</sup> <a name="SecretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput"></a>

```csharp
public string SecretPathInput { get; }
```

- *Type:* string

---

##### `UserUuidInput`<sup>Optional</sup> <a name="UserUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput"></a>

```csharp
public string UserUuidInput { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `SecretPath`<sup>Required</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath"></a>

```csharp
public string SecretPath { get; }
```

- *Type:* string

---

##### `UserUuid`<sup>Required</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid"></a>

```csharp
public string UserUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntegrationDatabricksAccountPrivateActionRunnerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---



