# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccount(scope Construct, id *string, config IntegrationDatabricksAccountConfig) IntegrationDatabricksAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig"></a>

```go
func PutAuthConfig(value IntegrationDatabricksAccountAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `PutPrivateActionRunnerConfiguration` <a name="PutPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration"></a>

```go
func PutPrivateActionRunnerConfiguration(value IntegrationDatabricksAccountPrivateActionRunnerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig"></a>

```go
func ResetAuthConfig()
```

##### `ResetCcmEnabled` <a name="ResetCcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled"></a>

```go
func ResetCcmEnabled()
```

##### `ResetDdApiKeyId` <a name="ResetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId"></a>

```go
func ResetDdApiKeyId()
```

##### `ResetDdApiKeySecret` <a name="ResetDdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret"></a>

```go
func ResetDdApiKeySecret()
```

##### `ResetDjmClusterPolicyEnabled` <a name="ResetDjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled"></a>

```go
func ResetDjmClusterPolicyEnabled()
```

##### `ResetDjmEnabled` <a name="ResetDjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled"></a>

```go
func ResetDjmEnabled()
```

##### `ResetDjmGlobalInitScriptEnabled` <a name="ResetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled"></a>

```go
func ResetDjmGlobalInitScriptEnabled()
```

##### `ResetDoCrawlersCron` <a name="ResetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron"></a>

```go
func ResetDoCrawlersCron()
```

##### `ResetDoEnabled` <a name="ResetDoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled"></a>

```go
func ResetDoEnabled()
```

##### `ResetModelServingEndpointName` <a name="ResetModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName"></a>

```go
func ResetModelServingEndpointName()
```

##### `ResetModelServingMetricsEnabled` <a name="ResetModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled"></a>

```go
func ResetModelServingMetricsEnabled()
```

##### `ResetPrivateActionRunnerConfiguration` <a name="ResetPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration"></a>

```go
func ResetPrivateActionRunnerConfiguration()
```

##### `ResetScriptGpumEnabled` <a name="ResetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled"></a>

```go
func ResetScriptGpumEnabled()
```

##### `ResetScriptLogsEnabled` <a name="ResetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled"></a>

```go
func ResetScriptLogsEnabled()
```

##### `ResetServerlessJobsEnabled` <a name="ResetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled"></a>

```go
func ResetServerlessJobsEnabled()
```

##### `ResetSystemTablesSqlWarehouseId` <a name="ResetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId"></a>

```go
func ResetSystemTablesSqlWarehouseId()
```

##### `ResetTableLineageEnabled` <a name="ResetTableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled"></a>

```go
func ResetTableLineageEnabled()
```

##### `ResetUcVolumePath` <a name="ResetUcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath"></a>

```go
func ResetUcVolumePath()
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

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration">PrivateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput">AuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput">CcmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput">DdApiKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput">DdApiKeySecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput">DjmClusterPolicyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput">DjmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput">DjmGlobalInitScriptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput">DoCrawlersCronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput">DoEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput">ModelServingEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput">ModelServingMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput">PrivateActionRunnerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput">ScriptGpumEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput">ScriptLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput">ServerlessJobsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput">SystemTablesSqlWarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput">TableLineageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput">UcVolumePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled">CcmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId">DdApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret">DdApiKeySecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled">DjmClusterPolicyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled">DjmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled">DoEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName">ModelServingEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled">ModelServingMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled">TableLineageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath">UcVolumePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig"></a>

```go
func AuthConfig() IntegrationDatabricksAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateActionRunnerConfiguration`<sup>Required</sup> <a name="PrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration"></a>

```go
func PrivateActionRunnerConfiguration() IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a>

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput"></a>

```go
func AuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CcmEnabledInput`<sup>Optional</sup> <a name="CcmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput"></a>

```go
func CcmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DdApiKeyIdInput`<sup>Optional</sup> <a name="DdApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput"></a>

```go
func DdApiKeyIdInput() *string
```

- *Type:* *string

---

##### `DdApiKeySecretInput`<sup>Optional</sup> <a name="DdApiKeySecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput"></a>

```go
func DdApiKeySecretInput() *string
```

- *Type:* *string

---

##### `DjmClusterPolicyEnabledInput`<sup>Optional</sup> <a name="DjmClusterPolicyEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput"></a>

```go
func DjmClusterPolicyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DjmEnabledInput`<sup>Optional</sup> <a name="DjmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput"></a>

```go
func DjmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DjmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput"></a>

```go
func DjmGlobalInitScriptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DoCrawlersCronInput`<sup>Optional</sup> <a name="DoCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput"></a>

```go
func DoCrawlersCronInput() *string
```

- *Type:* *string

---

##### `DoEnabledInput`<sup>Optional</sup> <a name="DoEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput"></a>

```go
func DoEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ModelServingEndpointNameInput`<sup>Optional</sup> <a name="ModelServingEndpointNameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput"></a>

```go
func ModelServingEndpointNameInput() *string
```

- *Type:* *string

---

##### `ModelServingMetricsEnabledInput`<sup>Optional</sup> <a name="ModelServingMetricsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput"></a>

```go
func ModelServingMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateActionRunnerConfigurationInput`<sup>Optional</sup> <a name="PrivateActionRunnerConfigurationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput"></a>

```go
func PrivateActionRunnerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptGpumEnabledInput`<sup>Optional</sup> <a name="ScriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput"></a>

```go
func ScriptGpumEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptLogsEnabledInput`<sup>Optional</sup> <a name="ScriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput"></a>

```go
func ScriptLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessJobsEnabledInput`<sup>Optional</sup> <a name="ServerlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput"></a>

```go
func ServerlessJobsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SystemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput"></a>

```go
func SystemTablesSqlWarehouseIdInput() *string
```

- *Type:* *string

---

##### `TableLineageEnabledInput`<sup>Optional</sup> <a name="TableLineageEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput"></a>

```go
func TableLineageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UcVolumePathInput`<sup>Optional</sup> <a name="UcVolumePathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput"></a>

```go
func UcVolumePathInput() *string
```

- *Type:* *string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput"></a>

```go
func WorkspaceUrlInput() *string
```

- *Type:* *string

---

##### `CcmEnabled`<sup>Required</sup> <a name="CcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled"></a>

```go
func CcmEnabled() interface{}
```

- *Type:* interface{}

---

##### `DdApiKeyId`<sup>Required</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId"></a>

```go
func DdApiKeyId() *string
```

- *Type:* *string

---

##### `DdApiKeySecret`<sup>Required</sup> <a name="DdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret"></a>

```go
func DdApiKeySecret() *string
```

- *Type:* *string

---

##### `DjmClusterPolicyEnabled`<sup>Required</sup> <a name="DjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled"></a>

```go
func DjmClusterPolicyEnabled() interface{}
```

- *Type:* interface{}

---

##### `DjmEnabled`<sup>Required</sup> <a name="DjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled"></a>

```go
func DjmEnabled() interface{}
```

- *Type:* interface{}

---

##### `DjmGlobalInitScriptEnabled`<sup>Required</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled"></a>

```go
func DjmGlobalInitScriptEnabled() interface{}
```

- *Type:* interface{}

---

##### `DoCrawlersCron`<sup>Required</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron"></a>

```go
func DoCrawlersCron() *string
```

- *Type:* *string

---

##### `DoEnabled`<sup>Required</sup> <a name="DoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled"></a>

```go
func DoEnabled() interface{}
```

- *Type:* interface{}

---

##### `ModelServingEndpointName`<sup>Required</sup> <a name="ModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName"></a>

```go
func ModelServingEndpointName() *string
```

- *Type:* *string

---

##### `ModelServingMetricsEnabled`<sup>Required</sup> <a name="ModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled"></a>

```go
func ModelServingMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScriptGpumEnabled`<sup>Required</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled"></a>

```go
func ScriptGpumEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScriptLogsEnabled`<sup>Required</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled"></a>

```go
func ScriptLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ServerlessJobsEnabled`<sup>Required</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled"></a>

```go
func ServerlessJobsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SystemTablesSqlWarehouseId`<sup>Required</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId"></a>

```go
func SystemTablesSqlWarehouseId() *string
```

- *Type:* *string

---

##### `TableLineageEnabled`<sup>Required</sup> <a name="TableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled"></a>

```go
func TableLineageEnabled() interface{}
```

- *Type:* interface{}

---

##### `UcVolumePath`<sup>Required</sup> <a name="UcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath"></a>

```go
func UcVolumePath() *string
```

- *Type:* *string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl"></a>

```go
func WorkspaceUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthConfig <a name="IntegrationDatabricksAccountAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthConfig {
	Oauth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth,
	Pat: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | oauth block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat">Pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | pat block. |

---

##### `Oauth`<sup>Optional</sup> <a name="Oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth"></a>

```go
Oauth IntegrationDatabricksAccountAuthConfigOauth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}

---

##### `Pat`<sup>Optional</sup> <a name="Pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat"></a>

```go
Pat IntegrationDatabricksAccountAuthConfigPat
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

pat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}

---

### IntegrationDatabricksAccountAuthConfigOauth <a name="IntegrationDatabricksAccountAuthConfigOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthConfigOauth {
	AzureTenantId: *string,
	ClientId: *string,
	ClientSecret: *string,
	DatabricksAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth Client ID for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth Client Secret for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId">DatabricksAccountId</a></code> | <code>*string</code> | Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner. |

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth Client ID for the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth Client Secret for the Databricks service principal.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}

---

##### `DatabricksAccountId`<sup>Optional</sup> <a name="DatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId"></a>

```go
DatabricksAccountId *string
```

- *Type:* *string

Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}

---

### IntegrationDatabricksAccountAuthConfigPat <a name="IntegrationDatabricksAccountAuthConfigPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthConfigPat {
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token">Token</a></code> | <code>*string</code> | Databricks Personal Access Token (PAT). |

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token"></a>

```go
Token *string
```

- *Type:* *string

Databricks Personal Access Token (PAT).

Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	WorkspaceUrl: *string,
	AuthConfig: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig,
	CcmEnabled: interface{},
	DdApiKeyId: *string,
	DdApiKeySecret: *string,
	DjmClusterPolicyEnabled: interface{},
	DjmEnabled: interface{},
	DjmGlobalInitScriptEnabled: interface{},
	DoCrawlersCron: *string,
	DoEnabled: interface{},
	ModelServingEndpointName: *string,
	ModelServingMetricsEnabled: interface{},
	PrivateActionRunnerConfiguration: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration,
	ScriptGpumEnabled: interface{},
	ScriptLogsEnabled: interface{},
	ServerlessJobsEnabled: interface{},
	SystemTablesSqlWarehouseId: *string,
	TableLineageEnabled: interface{},
	UcVolumePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">Name</a></code> | <code>*string</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled">CcmEnabled</a></code> | <code>interface{}</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId">DdApiKeyId</a></code> | <code>*string</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret">DdApiKeySecret</a></code> | <code>*string</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled">DjmClusterPolicyEnabled</a></code> | <code>interface{}</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled">DjmEnabled</a></code> | <code>interface{}</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>interface{}</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>*string</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled">DoEnabled</a></code> | <code>interface{}</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName">ModelServingEndpointName</a></code> | <code>*string</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled">ModelServingMetricsEnabled</a></code> | <code>interface{}</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration">PrivateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>interface{}</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>interface{}</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>interface{}</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>*string</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled">TableLineageEnabled</a></code> | <code>interface{}</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath">UcVolumePath</a></code> | <code>*string</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl"></a>

```go
WorkspaceUrl *string
```

- *Type:* *string

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig"></a>

```go
AuthConfig IntegrationDatabricksAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `CcmEnabled`<sup>Optional</sup> <a name="CcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled"></a>

```go
CcmEnabled interface{}
```

- *Type:* interface{}

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `DdApiKeyId`<sup>Optional</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId"></a>

```go
DdApiKeyId *string
```

- *Type:* *string

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `DdApiKeySecret`<sup>Optional</sup> <a name="DdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret"></a>

```go
DdApiKeySecret *string
```

- *Type:* *string

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `DjmClusterPolicyEnabled`<sup>Optional</sup> <a name="DjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled"></a>

```go
DjmClusterPolicyEnabled interface{}
```

- *Type:* interface{}

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `DjmEnabled`<sup>Optional</sup> <a name="DjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled"></a>

```go
DjmEnabled interface{}
```

- *Type:* interface{}

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `DjmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled"></a>

```go
DjmGlobalInitScriptEnabled interface{}
```

- *Type:* interface{}

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `DoCrawlersCron`<sup>Optional</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron"></a>

```go
DoCrawlersCron *string
```

- *Type:* *string

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `DoEnabled`<sup>Optional</sup> <a name="DoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled"></a>

```go
DoEnabled interface{}
```

- *Type:* interface{}

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `ModelServingEndpointName`<sup>Optional</sup> <a name="ModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName"></a>

```go
ModelServingEndpointName *string
```

- *Type:* *string

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `ModelServingMetricsEnabled`<sup>Optional</sup> <a name="ModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled"></a>

```go
ModelServingMetricsEnabled interface{}
```

- *Type:* interface{}

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `PrivateActionRunnerConfiguration`<sup>Optional</sup> <a name="PrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration"></a>

```go
PrivateActionRunnerConfiguration IntegrationDatabricksAccountPrivateActionRunnerConfiguration
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `ScriptGpumEnabled`<sup>Optional</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled"></a>

```go
ScriptGpumEnabled interface{}
```

- *Type:* interface{}

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `ScriptLogsEnabled`<sup>Optional</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled"></a>

```go
ScriptLogsEnabled interface{}
```

- *Type:* interface{}

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `ServerlessJobsEnabled`<sup>Optional</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled"></a>

```go
ServerlessJobsEnabled interface{}
```

- *Type:* interface{}

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `SystemTablesSqlWarehouseId`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId"></a>

```go
SystemTablesSqlWarehouseId *string
```

- *Type:* *string

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `TableLineageEnabled`<sup>Optional</sup> <a name="TableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled"></a>

```go
TableLineageEnabled interface{}
```

- *Type:* interface{}

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `UcVolumePath`<sup>Optional</sup> <a name="UcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath"></a>

```go
UcVolumePath *string
```

- *Type:* *string

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

### IntegrationDatabricksAccountPrivateActionRunnerConfiguration <a name="IntegrationDatabricksAccountPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration {
	ConnectionId: *string,
	SecretPath: *string,
	UserUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Private Action Runner connection ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath">SecretPath</a></code> | <code>*string</code> | Path to the stored secret holding Databricks credentials inside the Private Action Runner. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid">UserUuid</a></code> | <code>*string</code> | Service Account UUID used to execute Private Action Runner actions. |

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Private Action Runner connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `SecretPath`<sup>Optional</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath"></a>

```go
SecretPath *string
```

- *Type:* *string

Path to the stored secret holding Databricks credentials inside the Private Action Runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

##### `UserUuid`<sup>Optional</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid"></a>

```go
UserUuid *string
```

- *Type:* *string

Service Account UUID used to execute Private Action Runner actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthConfigOauthOutputReference <a name="IntegrationDatabricksAccountAuthConfigOauthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthConfigOauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthConfigOauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDatabricksAccountId` <a name="ResetDatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId"></a>

```go
func ResetDatabricksAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput">DatabricksAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId">DatabricksAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DatabricksAccountIdInput`<sup>Optional</sup> <a name="DatabricksAccountIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput"></a>

```go
func DatabricksAccountIdInput() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DatabricksAccountId`<sup>Required</sup> <a name="DatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId"></a>

```go
func DatabricksAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountAuthConfigOutputReference <a name="IntegrationDatabricksAccountAuthConfigOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth` <a name="PutOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth"></a>

```go
func PutOauth(value IntegrationDatabricksAccountAuthConfigOauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `PutPat` <a name="PutPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat"></a>

```go
func PutPat(value IntegrationDatabricksAccountAuthConfigPat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `ResetOauth` <a name="ResetOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth"></a>

```go
func ResetOauth()
```

##### `ResetPat` <a name="ResetPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat"></a>

```go
func ResetPat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat">Pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput">OauthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput">PatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth`<sup>Required</sup> <a name="Oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth"></a>

```go
func Oauth() IntegrationDatabricksAccountAuthConfigOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a>

---

##### `Pat`<sup>Required</sup> <a name="Pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat"></a>

```go
func Pat() IntegrationDatabricksAccountAuthConfigPatOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a>

---

##### `OauthInput`<sup>Optional</sup> <a name="OauthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput"></a>

```go
func OauthInput() interface{}
```

- *Type:* interface{}

---

##### `PatInput`<sup>Optional</sup> <a name="PatInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput"></a>

```go
func PatInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountAuthConfigPatOutputReference <a name="IntegrationDatabricksAccountAuthConfigPatOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthConfigPatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthConfigPatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken"></a>

```go
func ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference <a name="IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetSecretPath` <a name="ResetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath"></a>

```go
func ResetSecretPath()
```

##### `ResetUserUuid` <a name="ResetUserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid"></a>

```go
func ResetUserUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput">SecretPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput">UserUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath">SecretPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid">UserUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `SecretPathInput`<sup>Optional</sup> <a name="SecretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput"></a>

```go
func SecretPathInput() *string
```

- *Type:* *string

---

##### `UserUuidInput`<sup>Optional</sup> <a name="UserUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput"></a>

```go
func UserUuidInput() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `SecretPath`<sup>Required</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath"></a>

```go
func SecretPath() *string
```

- *Type:* *string

---

##### `UserUuid`<sup>Required</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid"></a>

```go
func UserUuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



