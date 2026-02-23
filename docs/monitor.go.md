# `monitor` Submodule <a name="`monitor` Submodule" id="@cdktn/provider-datadog.monitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Monitor <a name="Monitor" id="@cdktn/provider-datadog.monitor.Monitor"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.Monitor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitor(scope Construct, id *string, config MonitorConfig) Monitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig">MonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.monitor.Monitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorConfig">MonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholds">PutMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholdWindows">PutMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putSchedulingOptions">PutSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetDraftStatus">ResetDraftStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEnableLogsSample">ResetEnableLogsSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEnableSamples">ResetEnableSamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEscalationMessage">ResetEscalationMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetEvaluationDelay">ResetEvaluationDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor">ResetGroupbySimpleMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetGroupRetentionDuration">ResetGroupRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetIncludeTags">ResetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetLocked">ResetLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholds">ResetMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows">ResetMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNewGroupDelay">ResetNewGroupDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNewHostDelay">ResetNewHostDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNoDataTimeframe">ResetNoDataTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotificationPresetName">ResetNotificationPresetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotifyAudit">ResetNotifyAudit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotifyBy">ResetNotifyBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetNotifyNoData">ResetNotifyNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetOnMissingData">ResetOnMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRenotifyInterval">ResetRenotifyInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRenotifyOccurrences">ResetRenotifyOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRenotifyStatuses">ResetRenotifyStatuses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRequireFullWindow">ResetRequireFullWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetRestrictedRoles">ResetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetSchedulingOptions">ResetSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetTimeoutH">ResetTimeoutH</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.Monitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.monitor.Monitor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.monitor.Monitor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.monitor.Monitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.monitor.Monitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.monitor.Monitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.monitor.Monitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.monitor.Monitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.monitor.Monitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.monitor.Monitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.monitor.Monitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.monitor.Monitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.monitor.Monitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.monitor.Monitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.monitor.Monitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.Monitor.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.Monitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.Monitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.monitor.Monitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.monitor.Monitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.monitor.Monitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.monitor.Monitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.monitor.Monitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitor.Monitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssets` <a name="PutAssets" id="@cdktn/provider-datadog.monitor.Monitor.putAssets"></a>

```go
func PutAssets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putAssets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMonitorThresholds` <a name="PutMonitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholds"></a>

```go
func PutMonitorThresholds(value MonitorMonitorThresholds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `PutMonitorThresholdWindows` <a name="PutMonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholdWindows"></a>

```go
func PutMonitorThresholdWindows(value MonitorMonitorThresholdWindows)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putMonitorThresholdWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `PutSchedulingOptions` <a name="PutSchedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.putSchedulingOptions"></a>

```go
func PutSchedulingOptions(value MonitorSchedulingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putSchedulingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-datadog.monitor.Monitor.putVariables"></a>

```go
func PutVariables(value MonitorVariables)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.Monitor.putVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `ResetAssets` <a name="ResetAssets" id="@cdktn/provider-datadog.monitor.Monitor.resetAssets"></a>

```go
func ResetAssets()
```

##### `ResetDraftStatus` <a name="ResetDraftStatus" id="@cdktn/provider-datadog.monitor.Monitor.resetDraftStatus"></a>

```go
func ResetDraftStatus()
```

##### `ResetEnableLogsSample` <a name="ResetEnableLogsSample" id="@cdktn/provider-datadog.monitor.Monitor.resetEnableLogsSample"></a>

```go
func ResetEnableLogsSample()
```

##### `ResetEnableSamples` <a name="ResetEnableSamples" id="@cdktn/provider-datadog.monitor.Monitor.resetEnableSamples"></a>

```go
func ResetEnableSamples()
```

##### `ResetEscalationMessage` <a name="ResetEscalationMessage" id="@cdktn/provider-datadog.monitor.Monitor.resetEscalationMessage"></a>

```go
func ResetEscalationMessage()
```

##### `ResetEvaluationDelay` <a name="ResetEvaluationDelay" id="@cdktn/provider-datadog.monitor.Monitor.resetEvaluationDelay"></a>

```go
func ResetEvaluationDelay()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktn/provider-datadog.monitor.Monitor.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetGroupbySimpleMonitor` <a name="ResetGroupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor"></a>

```go
func ResetGroupbySimpleMonitor()
```

##### `ResetGroupRetentionDuration` <a name="ResetGroupRetentionDuration" id="@cdktn/provider-datadog.monitor.Monitor.resetGroupRetentionDuration"></a>

```go
func ResetGroupRetentionDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.monitor.Monitor.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeTags` <a name="ResetIncludeTags" id="@cdktn/provider-datadog.monitor.Monitor.resetIncludeTags"></a>

```go
func ResetIncludeTags()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktn/provider-datadog.monitor.Monitor.resetLocked"></a>

```go
func ResetLocked()
```

##### `ResetMonitorThresholds` <a name="ResetMonitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholds"></a>

```go
func ResetMonitorThresholds()
```

##### `ResetMonitorThresholdWindows` <a name="ResetMonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows"></a>

```go
func ResetMonitorThresholdWindows()
```

##### `ResetNewGroupDelay` <a name="ResetNewGroupDelay" id="@cdktn/provider-datadog.monitor.Monitor.resetNewGroupDelay"></a>

```go
func ResetNewGroupDelay()
```

##### `ResetNewHostDelay` <a name="ResetNewHostDelay" id="@cdktn/provider-datadog.monitor.Monitor.resetNewHostDelay"></a>

```go
func ResetNewHostDelay()
```

##### `ResetNoDataTimeframe` <a name="ResetNoDataTimeframe" id="@cdktn/provider-datadog.monitor.Monitor.resetNoDataTimeframe"></a>

```go
func ResetNoDataTimeframe()
```

##### `ResetNotificationPresetName` <a name="ResetNotificationPresetName" id="@cdktn/provider-datadog.monitor.Monitor.resetNotificationPresetName"></a>

```go
func ResetNotificationPresetName()
```

##### `ResetNotifyAudit` <a name="ResetNotifyAudit" id="@cdktn/provider-datadog.monitor.Monitor.resetNotifyAudit"></a>

```go
func ResetNotifyAudit()
```

##### `ResetNotifyBy` <a name="ResetNotifyBy" id="@cdktn/provider-datadog.monitor.Monitor.resetNotifyBy"></a>

```go
func ResetNotifyBy()
```

##### `ResetNotifyNoData` <a name="ResetNotifyNoData" id="@cdktn/provider-datadog.monitor.Monitor.resetNotifyNoData"></a>

```go
func ResetNotifyNoData()
```

##### `ResetOnMissingData` <a name="ResetOnMissingData" id="@cdktn/provider-datadog.monitor.Monitor.resetOnMissingData"></a>

```go
func ResetOnMissingData()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-datadog.monitor.Monitor.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRenotifyInterval` <a name="ResetRenotifyInterval" id="@cdktn/provider-datadog.monitor.Monitor.resetRenotifyInterval"></a>

```go
func ResetRenotifyInterval()
```

##### `ResetRenotifyOccurrences` <a name="ResetRenotifyOccurrences" id="@cdktn/provider-datadog.monitor.Monitor.resetRenotifyOccurrences"></a>

```go
func ResetRenotifyOccurrences()
```

##### `ResetRenotifyStatuses` <a name="ResetRenotifyStatuses" id="@cdktn/provider-datadog.monitor.Monitor.resetRenotifyStatuses"></a>

```go
func ResetRenotifyStatuses()
```

##### `ResetRequireFullWindow` <a name="ResetRequireFullWindow" id="@cdktn/provider-datadog.monitor.Monitor.resetRequireFullWindow"></a>

```go
func ResetRequireFullWindow()
```

##### `ResetRestrictedRoles` <a name="ResetRestrictedRoles" id="@cdktn/provider-datadog.monitor.Monitor.resetRestrictedRoles"></a>

```go
func ResetRestrictedRoles()
```

##### `ResetSchedulingOptions` <a name="ResetSchedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.resetSchedulingOptions"></a>

```go
func ResetSchedulingOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.monitor.Monitor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeoutH` <a name="ResetTimeoutH" id="@cdktn/provider-datadog.monitor.Monitor.resetTimeoutH"></a>

```go
func ResetTimeoutH()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-datadog.monitor.Monitor.resetValidate"></a>

```go
func ResetValidate()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-datadog.monitor.Monitor.resetVariables"></a>

```go
func ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Monitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.monitor.Monitor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.Monitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitor.Monitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.Monitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.Monitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitor.Monitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.Monitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Monitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Monitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Monitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Monitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.assets">Assets</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList">MonitorAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholds">MonitorThresholds</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindows">MonitorThresholdWindows</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptions">SchedulingOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.assetsInput">AssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.draftStatusInput">DraftStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSampleInput">EnableLogsSampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableSamplesInput">EnableSamplesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.escalationMessageInput">EscalationMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelayInput">EvaluationDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput">GroupbySimpleMonitorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput">GroupRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.includeTagsInput">IncludeTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.lockedInput">LockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdsInput">MonitorThresholdsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput">MonitorThresholdWindowsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelayInput">NewGroupDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newHostDelayInput">NewHostDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframeInput">NoDataTimeframeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetNameInput">NotificationPresetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyAuditInput">NotifyAuditInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyByInput">NotifyByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyNoDataInput">NotifyNoDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.onMissingDataInput">OnMissingDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyIntervalInput">RenotifyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput">RenotifyOccurrencesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatusesInput">RenotifyStatusesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindowInput">RequireFullWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.restrictedRolesInput">RestrictedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptionsInput">SchedulingOptionsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.timeoutHInput">TimeoutHInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.validateInput">ValidateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.variablesInput">VariablesInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.draftStatus">DraftStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSample">EnableLogsSample</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.enableSamples">EnableSamples</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.escalationMessage">EscalationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelay">EvaluationDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor">GroupbySimpleMonitor</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDuration">GroupRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.includeTags">IncludeTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.locked">Locked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelay">NewGroupDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.newHostDelay">NewHostDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframe">NoDataTimeframe</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetName">NotificationPresetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyAudit">NotifyAudit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyBy">NotifyBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.notifyNoData">NotifyNoData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.onMissingData">OnMissingData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyInterval">RenotifyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrences">RenotifyOccurrences</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatuses">RenotifyStatuses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindow">RequireFullWindow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.restrictedRoles">RestrictedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.timeoutH">TimeoutH</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.validate">Validate</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.monitor.Monitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.monitor.Monitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.Monitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.monitor.Monitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.monitor.Monitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.monitor.Monitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.monitor.Monitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.monitor.Monitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.monitor.Monitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.monitor.Monitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.monitor.Monitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitor.Monitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.monitor.Monitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktn/provider-datadog.monitor.Monitor.property.assets"></a>

```go
func Assets() MonitorAssetsList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList">MonitorAssetsList</a>

---

##### `MonitorThresholds`<sup>Required</sup> <a name="MonitorThresholds" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholds"></a>

```go
func MonitorThresholds() MonitorMonitorThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a>

---

##### `MonitorThresholdWindows`<sup>Required</sup> <a name="MonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindows"></a>

```go
func MonitorThresholdWindows() MonitorMonitorThresholdWindowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a>

---

##### `SchedulingOptions`<sup>Required</sup> <a name="SchedulingOptions" id="@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptions"></a>

```go
func SchedulingOptions() MonitorSchedulingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-datadog.monitor.Monitor.property.variables"></a>

```go
func Variables() MonitorVariablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a>

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.assetsInput"></a>

```go
func AssetsInput() interface{}
```

- *Type:* interface{}

---

##### `DraftStatusInput`<sup>Optional</sup> <a name="DraftStatusInput" id="@cdktn/provider-datadog.monitor.Monitor.property.draftStatusInput"></a>

```go
func DraftStatusInput() *string
```

- *Type:* *string

---

##### `EnableLogsSampleInput`<sup>Optional</sup> <a name="EnableLogsSampleInput" id="@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSampleInput"></a>

```go
func EnableLogsSampleInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSamplesInput`<sup>Optional</sup> <a name="EnableSamplesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.enableSamplesInput"></a>

```go
func EnableSamplesInput() interface{}
```

- *Type:* interface{}

---

##### `EscalationMessageInput`<sup>Optional</sup> <a name="EscalationMessageInput" id="@cdktn/provider-datadog.monitor.Monitor.property.escalationMessageInput"></a>

```go
func EscalationMessageInput() *string
```

- *Type:* *string

---

##### `EvaluationDelayInput`<sup>Optional</sup> <a name="EvaluationDelayInput" id="@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelayInput"></a>

```go
func EvaluationDelayInput() *f64
```

- *Type:* *f64

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktn/provider-datadog.monitor.Monitor.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `GroupbySimpleMonitorInput`<sup>Optional</sup> <a name="GroupbySimpleMonitorInput" id="@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput"></a>

```go
func GroupbySimpleMonitorInput() interface{}
```

- *Type:* interface{}

---

##### `GroupRetentionDurationInput`<sup>Optional</sup> <a name="GroupRetentionDurationInput" id="@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput"></a>

```go
func GroupRetentionDurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.monitor.Monitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeTagsInput`<sup>Optional</sup> <a name="IncludeTagsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.includeTagsInput"></a>

```go
func IncludeTagsInput() interface{}
```

- *Type:* interface{}

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktn/provider-datadog.monitor.Monitor.property.lockedInput"></a>

```go
func LockedInput() interface{}
```

- *Type:* interface{}

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-datadog.monitor.Monitor.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `MonitorThresholdsInput`<sup>Optional</sup> <a name="MonitorThresholdsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdsInput"></a>

```go
func MonitorThresholdsInput() MonitorMonitorThresholds
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `MonitorThresholdWindowsInput`<sup>Optional</sup> <a name="MonitorThresholdWindowsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput"></a>

```go
func MonitorThresholdWindowsInput() MonitorMonitorThresholdWindows
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitor.Monitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewGroupDelayInput`<sup>Optional</sup> <a name="NewGroupDelayInput" id="@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelayInput"></a>

```go
func NewGroupDelayInput() *f64
```

- *Type:* *f64

---

##### `NewHostDelayInput`<sup>Optional</sup> <a name="NewHostDelayInput" id="@cdktn/provider-datadog.monitor.Monitor.property.newHostDelayInput"></a>

```go
func NewHostDelayInput() *f64
```

- *Type:* *f64

---

##### `NoDataTimeframeInput`<sup>Optional</sup> <a name="NoDataTimeframeInput" id="@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframeInput"></a>

```go
func NoDataTimeframeInput() *f64
```

- *Type:* *f64

---

##### `NotificationPresetNameInput`<sup>Optional</sup> <a name="NotificationPresetNameInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetNameInput"></a>

```go
func NotificationPresetNameInput() *string
```

- *Type:* *string

---

##### `NotifyAuditInput`<sup>Optional</sup> <a name="NotifyAuditInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyAuditInput"></a>

```go
func NotifyAuditInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyByInput`<sup>Optional</sup> <a name="NotifyByInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyByInput"></a>

```go
func NotifyByInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotifyNoDataInput`<sup>Optional</sup> <a name="NotifyNoDataInput" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyNoDataInput"></a>

```go
func NotifyNoDataInput() interface{}
```

- *Type:* interface{}

---

##### `OnMissingDataInput`<sup>Optional</sup> <a name="OnMissingDataInput" id="@cdktn/provider-datadog.monitor.Monitor.property.onMissingDataInput"></a>

```go
func OnMissingDataInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-datadog.monitor.Monitor.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.monitor.Monitor.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RenotifyIntervalInput`<sup>Optional</sup> <a name="RenotifyIntervalInput" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyIntervalInput"></a>

```go
func RenotifyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RenotifyOccurrencesInput`<sup>Optional</sup> <a name="RenotifyOccurrencesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput"></a>

```go
func RenotifyOccurrencesInput() *f64
```

- *Type:* *f64

---

##### `RenotifyStatusesInput`<sup>Optional</sup> <a name="RenotifyStatusesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatusesInput"></a>

```go
func RenotifyStatusesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequireFullWindowInput`<sup>Optional</sup> <a name="RequireFullWindowInput" id="@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindowInput"></a>

```go
func RequireFullWindowInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictedRolesInput`<sup>Optional</sup> <a name="RestrictedRolesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.restrictedRolesInput"></a>

```go
func RestrictedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingOptionsInput`<sup>Optional</sup> <a name="SchedulingOptionsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.schedulingOptionsInput"></a>

```go
func SchedulingOptionsInput() MonitorSchedulingOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.monitor.Monitor.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutHInput`<sup>Optional</sup> <a name="TimeoutHInput" id="@cdktn/provider-datadog.monitor.Monitor.property.timeoutHInput"></a>

```go
func TimeoutHInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.monitor.Monitor.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-datadog.monitor.Monitor.property.validateInput"></a>

```go
func ValidateInput() interface{}
```

- *Type:* interface{}

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-datadog.monitor.Monitor.property.variablesInput"></a>

```go
func VariablesInput() MonitorVariables
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `DraftStatus`<sup>Required</sup> <a name="DraftStatus" id="@cdktn/provider-datadog.monitor.Monitor.property.draftStatus"></a>

```go
func DraftStatus() *string
```

- *Type:* *string

---

##### `EnableLogsSample`<sup>Required</sup> <a name="EnableLogsSample" id="@cdktn/provider-datadog.monitor.Monitor.property.enableLogsSample"></a>

```go
func EnableLogsSample() interface{}
```

- *Type:* interface{}

---

##### `EnableSamples`<sup>Required</sup> <a name="EnableSamples" id="@cdktn/provider-datadog.monitor.Monitor.property.enableSamples"></a>

```go
func EnableSamples() interface{}
```

- *Type:* interface{}

---

##### `EscalationMessage`<sup>Required</sup> <a name="EscalationMessage" id="@cdktn/provider-datadog.monitor.Monitor.property.escalationMessage"></a>

```go
func EscalationMessage() *string
```

- *Type:* *string

---

##### `EvaluationDelay`<sup>Required</sup> <a name="EvaluationDelay" id="@cdktn/provider-datadog.monitor.Monitor.property.evaluationDelay"></a>

```go
func EvaluationDelay() *f64
```

- *Type:* *f64

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-datadog.monitor.Monitor.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `GroupbySimpleMonitor`<sup>Required</sup> <a name="GroupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor"></a>

```go
func GroupbySimpleMonitor() interface{}
```

- *Type:* interface{}

---

##### `GroupRetentionDuration`<sup>Required</sup> <a name="GroupRetentionDuration" id="@cdktn/provider-datadog.monitor.Monitor.property.groupRetentionDuration"></a>

```go
func GroupRetentionDuration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitor.Monitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeTags`<sup>Required</sup> <a name="IncludeTags" id="@cdktn/provider-datadog.monitor.Monitor.property.includeTags"></a>

```go
func IncludeTags() interface{}
```

- *Type:* interface{}

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktn/provider-datadog.monitor.Monitor.property.locked"></a>

```go
func Locked() interface{}
```

- *Type:* interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.monitor.Monitor.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.Monitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewGroupDelay`<sup>Required</sup> <a name="NewGroupDelay" id="@cdktn/provider-datadog.monitor.Monitor.property.newGroupDelay"></a>

```go
func NewGroupDelay() *f64
```

- *Type:* *f64

---

##### `NewHostDelay`<sup>Required</sup> <a name="NewHostDelay" id="@cdktn/provider-datadog.monitor.Monitor.property.newHostDelay"></a>

```go
func NewHostDelay() *f64
```

- *Type:* *f64

---

##### `NoDataTimeframe`<sup>Required</sup> <a name="NoDataTimeframe" id="@cdktn/provider-datadog.monitor.Monitor.property.noDataTimeframe"></a>

```go
func NoDataTimeframe() *f64
```

- *Type:* *f64

---

##### `NotificationPresetName`<sup>Required</sup> <a name="NotificationPresetName" id="@cdktn/provider-datadog.monitor.Monitor.property.notificationPresetName"></a>

```go
func NotificationPresetName() *string
```

- *Type:* *string

---

##### `NotifyAudit`<sup>Required</sup> <a name="NotifyAudit" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyAudit"></a>

```go
func NotifyAudit() interface{}
```

- *Type:* interface{}

---

##### `NotifyBy`<sup>Required</sup> <a name="NotifyBy" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyBy"></a>

```go
func NotifyBy() *[]*string
```

- *Type:* *[]*string

---

##### `NotifyNoData`<sup>Required</sup> <a name="NotifyNoData" id="@cdktn/provider-datadog.monitor.Monitor.property.notifyNoData"></a>

```go
func NotifyNoData() interface{}
```

- *Type:* interface{}

---

##### `OnMissingData`<sup>Required</sup> <a name="OnMissingData" id="@cdktn/provider-datadog.monitor.Monitor.property.onMissingData"></a>

```go
func OnMissingData() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-datadog.monitor.Monitor.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.monitor.Monitor.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyInterval"></a>

```go
func RenotifyInterval() *f64
```

- *Type:* *f64

---

##### `RenotifyOccurrences`<sup>Required</sup> <a name="RenotifyOccurrences" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyOccurrences"></a>

```go
func RenotifyOccurrences() *f64
```

- *Type:* *f64

---

##### `RenotifyStatuses`<sup>Required</sup> <a name="RenotifyStatuses" id="@cdktn/provider-datadog.monitor.Monitor.property.renotifyStatuses"></a>

```go
func RenotifyStatuses() *[]*string
```

- *Type:* *[]*string

---

##### `RequireFullWindow`<sup>Required</sup> <a name="RequireFullWindow" id="@cdktn/provider-datadog.monitor.Monitor.property.requireFullWindow"></a>

```go
func RequireFullWindow() interface{}
```

- *Type:* interface{}

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktn/provider-datadog.monitor.Monitor.property.restrictedRoles"></a>

```go
func RestrictedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.monitor.Monitor.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutH`<sup>Required</sup> <a name="TimeoutH" id="@cdktn/provider-datadog.monitor.Monitor.property.timeoutH"></a>

```go
func TimeoutH() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.monitor.Monitor.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-datadog.monitor.Monitor.property.validate"></a>

```go
func Validate() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.Monitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.monitor.Monitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAssets <a name="MonitorAssets" id="@cdktn/provider-datadog.monitor.MonitorAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorAssets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorAssets {
	Category: *string,
	Name: *string,
	Url: *string,
	ResourceKey: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.category">Category</a></code> | <code>*string</code> | Type of asset the entity represents on a monitor. Valid values are `runbook`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.name">Name</a></code> | <code>*string</code> | Name for the monitor asset. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.url">Url</a></code> | <code>*string</code> | URL for the asset. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceKey">ResourceKey</a></code> | <code>*string</code> | Identifier of the internal Datadog resource that this asset represents. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceType">ResourceType</a></code> | <code>*string</code> | Type of internal Datadog resource associated with a monitor asset. Valid values are `notebook`. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.category"></a>

```go
Category *string
```

- *Type:* *string

Type of asset the entity represents on a monitor. Valid values are `runbook`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#category Monitor#category}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for the monitor asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#name Monitor#name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#url Monitor#url}

---

##### `ResourceKey`<sup>Optional</sup> <a name="ResourceKey" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceKey"></a>

```go
ResourceKey *string
```

- *Type:* *string

Identifier of the internal Datadog resource that this asset represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#resource_key Monitor#resource_key}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-datadog.monitor.MonitorAssets.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Type of internal Datadog resource associated with a monitor asset. Valid values are `notebook`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#resource_type Monitor#resource_type}

---

### MonitorConfig <a name="MonitorConfig" id="@cdktn/provider-datadog.monitor.MonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Message: *string,
	Name: *string,
	Query: *string,
	Type: *string,
	Assets: interface{},
	DraftStatus: *string,
	EnableLogsSample: interface{},
	EnableSamples: interface{},
	EscalationMessage: *string,
	EvaluationDelay: *f64,
	ForceDelete: interface{},
	GroupbySimpleMonitor: interface{},
	GroupRetentionDuration: *string,
	Id: *string,
	IncludeTags: interface{},
	Locked: interface{},
	MonitorThresholds: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorMonitorThresholds,
	MonitorThresholdWindows: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorMonitorThresholdWindows,
	NewGroupDelay: *f64,
	NewHostDelay: *f64,
	NoDataTimeframe: *f64,
	NotificationPresetName: *string,
	NotifyAudit: interface{},
	NotifyBy: *[]*string,
	NotifyNoData: interface{},
	OnMissingData: *string,
	Priority: *string,
	RenotifyInterval: *f64,
	RenotifyOccurrences: *f64,
	RenotifyStatuses: *[]*string,
	RequireFullWindow: interface{},
	RestrictedRoles: *[]*string,
	SchedulingOptions: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorSchedulingOptions,
	Tags: *[]*string,
	TimeoutH: *f64,
	Validate: interface{},
	Variables: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorVariables,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.message">Message</a></code> | <code>*string</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.name">Name</a></code> | <code>*string</code> | Name of Datadog monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.query">Query</a></code> | <code>*string</code> | The monitor query to notify on. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.type">Type</a></code> | <code>*string</code> | The type of the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.assets">Assets</a></code> | <code>interface{}</code> | assets block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.draftStatus">DraftStatus</a></code> | <code>*string</code> | Indicates whether the monitor is in a draft or published state. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.enableLogsSample">EnableLogsSample</a></code> | <code>interface{}</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.enableSamples">EnableSamples</a></code> | <code>interface{}</code> | Whether or not a list of samples which triggered the alert is included. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.escalationMessage">EscalationMessage</a></code> | <code>*string</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.evaluationDelay">EvaluationDelay</a></code> | <code>*f64</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor">GroupbySimpleMonitor</a></code> | <code>interface{}</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration">GroupRetentionDuration</a></code> | <code>*string</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.includeTags">IncludeTags</a></code> | <code>interface{}</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.locked">Locked</a></code> | <code>interface{}</code> | A boolean indicating whether changes to this monitor should be restricted to the creator or admins. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholds">MonitorThresholds</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows">MonitorThresholdWindows</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.newGroupDelay">NewGroupDelay</a></code> | <code>*f64</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.newHostDelay">NewHostDelay</a></code> | <code>*f64</code> | **Deprecated**. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe">NoDataTimeframe</a></code> | <code>*f64</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notificationPresetName">NotificationPresetName</a></code> | <code>*string</code> | Toggles the display of additional content sent in the monitor notification. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyAudit">NotifyAudit</a></code> | <code>interface{}</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyBy">NotifyBy</a></code> | <code>*[]*string</code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyNoData">NotifyNoData</a></code> | <code>interface{}</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.onMissingData">OnMissingData</a></code> | <code>*string</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.priority">Priority</a></code> | <code>*string</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyInterval">RenotifyInterval</a></code> | <code>*f64</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences">RenotifyOccurrences</a></code> | <code>*f64</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses">RenotifyStatuses</a></code> | <code>*[]*string</code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.requireFullWindow">RequireFullWindow</a></code> | <code>interface{}</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.restrictedRoles">RestrictedRoles</a></code> | <code>*[]*string</code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.schedulingOptions">SchedulingOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.timeoutH">TimeoutH</a></code> | <code>*f64</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.validate">Validate</a></code> | <code>interface{}</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorConfig.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#message Monitor#message}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#name Monitor#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#query Monitor#query}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`, `network-performance alert`, `cost alert`, `data-quality alert`, `network-path alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#type Monitor#type}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.assets"></a>

```go
Assets interface{}
```

- *Type:* interface{}

assets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#assets Monitor#assets}

---

##### `DraftStatus`<sup>Optional</sup> <a name="DraftStatus" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.draftStatus"></a>

```go
DraftStatus *string
```

- *Type:* *string

Indicates whether the monitor is in a draft or published state.

When set to `draft`, the monitor appears as Draft and does not send notifications. When set to `published`, the monitor is active, and it evaluates conditions and sends notifications as configured. Valid values are `draft`, `published`. Defaults to `"published"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#draft_status Monitor#draft_status}

---

##### `EnableLogsSample`<sup>Optional</sup> <a name="EnableLogsSample" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.enableLogsSample"></a>

```go
EnableLogsSample interface{}
```

- *Type:* interface{}

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `EnableSamples`<sup>Optional</sup> <a name="EnableSamples" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.enableSamples"></a>

```go
EnableSamples interface{}
```

- *Type:* interface{}

Whether or not a list of samples which triggered the alert is included.

This is only used by CI Test and Pipeline monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#enable_samples Monitor#enable_samples}

---

##### `EscalationMessage`<sup>Optional</sup> <a name="EscalationMessage" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.escalationMessage"></a>

```go
EscalationMessage *string
```

- *Type:* *string

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `EvaluationDelay`<sup>Optional</sup> <a name="EvaluationDelay" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.evaluationDelay"></a>

```go
EvaluationDelay *f64
```

- *Type:* *f64

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `GroupbySimpleMonitor`<sup>Optional</sup> <a name="GroupbySimpleMonitor" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor"></a>

```go
GroupbySimpleMonitor interface{}
```

- *Type:* interface{}

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `GroupRetentionDuration`<sup>Optional</sup> <a name="GroupRetentionDuration" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration"></a>

```go
GroupRetentionDuration *string
```

- *Type:* *string

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeTags`<sup>Optional</sup> <a name="IncludeTags" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.includeTags"></a>

```go
IncludeTags interface{}
```

- *Type:* interface{}

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.locked"></a>

```go
Locked interface{}
```

- *Type:* interface{}

A boolean indicating whether changes to this monitor should be restricted to the creator or admins.

Defaults to `false`. **Deprecated.** Use `restricted_roles`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#locked Monitor#locked}

---

##### `MonitorThresholds`<sup>Optional</sup> <a name="MonitorThresholds" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholds"></a>

```go
MonitorThresholds MonitorMonitorThresholds
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `MonitorThresholdWindows`<sup>Optional</sup> <a name="MonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows"></a>

```go
MonitorThresholdWindows MonitorMonitorThresholdWindows
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `NewGroupDelay`<sup>Optional</sup> <a name="NewGroupDelay" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.newGroupDelay"></a>

```go
NewGroupDelay *f64
```

- *Type:* *f64

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `NewHostDelay`<sup>Optional</sup> <a name="NewHostDelay" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.newHostDelay"></a>

```go
NewHostDelay *f64
```

- *Type:* *f64

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `NoDataTimeframe`<sup>Optional</sup> <a name="NoDataTimeframe" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe"></a>

```go
NoDataTimeframe *f64
```

- *Type:* *f64

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `NotificationPresetName`<sup>Optional</sup> <a name="NotificationPresetName" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notificationPresetName"></a>

```go
NotificationPresetName *string
```

- *Type:* *string

Toggles the display of additional content sent in the monitor notification.

Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `NotifyAudit`<sup>Optional</sup> <a name="NotifyAudit" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyAudit"></a>

```go
NotifyAudit interface{}
```

- *Type:* interface{}

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `NotifyBy`<sup>Optional</sup> <a name="NotifyBy" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyBy"></a>

```go
NotifyBy *[]*string
```

- *Type:* *[]*string

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `NotifyNoData`<sup>Optional</sup> <a name="NotifyNoData" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.notifyNoData"></a>

```go
NotifyNoData interface{}
```

- *Type:* interface{}

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `OnMissingData`<sup>Optional</sup> <a name="OnMissingData" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.onMissingData"></a>

```go
OnMissingData *string
```

- *Type:* *string

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is not available for Service Check, Composite, or SLO monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#priority Monitor#priority}

---

##### `RenotifyInterval`<sup>Optional</sup> <a name="RenotifyInterval" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyInterval"></a>

```go
RenotifyInterval *f64
```

- *Type:* *f64

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `RenotifyOccurrences`<sup>Optional</sup> <a name="RenotifyOccurrences" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences"></a>

```go
RenotifyOccurrences *f64
```

- *Type:* *f64

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `RenotifyStatuses`<sup>Optional</sup> <a name="RenotifyStatuses" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses"></a>

```go
RenotifyStatuses *[]*string
```

- *Type:* *[]*string

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `RequireFullWindow`<sup>Optional</sup> <a name="RequireFullWindow" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.requireFullWindow"></a>

```go
RequireFullWindow interface{}
```

- *Type:* interface{}

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `RestrictedRoles`<sup>Optional</sup> <a name="RestrictedRoles" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.restrictedRoles"></a>

```go
RestrictedRoles *[]*string
```

- *Type:* *[]*string

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field.

> **Note:** When the `TERRAFORM_MONITOR_EXPLICIT_RESTRICTED_ROLES` environment variable is set to `true`, this argument is treated as `Computed`. Terraform will automatically read the current restricted roles list from the Datadog API whenever the attribute is omitted. If `restricted_roles` is explicitly set in the configuration, that value always takes precedence over whatever is discovered during the read. This opt-in behaviour lets you migrate responsibility for monitor permissions to the `datadog_restriction_policy` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `SchedulingOptions`<sup>Optional</sup> <a name="SchedulingOptions" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.schedulingOptions"></a>

```go
SchedulingOptions MonitorSchedulingOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#tags Monitor#tags}

---

##### `TimeoutH`<sup>Optional</sup> <a name="TimeoutH" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.timeoutH"></a>

```go
TimeoutH *f64
```

- *Type:* *f64

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.validate"></a>

```go
Validate interface{}
```

- *Type:* interface{}

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#validate Monitor#validate}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-datadog.monitor.MonitorConfig.property.variables"></a>

```go
Variables MonitorVariables
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#variables Monitor#variables}

---

### MonitorMonitorThresholds <a name="MonitorMonitorThresholds" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorMonitorThresholds {
	Critical: *string,
	CriticalRecovery: *string,
	Ok: *string,
	Unknown: *string,
	Warning: *string,
	WarningRecovery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.critical">Critical</a></code> | <code>*string</code> | The monitor `CRITICAL` threshold. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery">CriticalRecovery</a></code> | <code>*string</code> | The monitor `CRITICAL` recovery threshold. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.ok">Ok</a></code> | <code>*string</code> | The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown">Unknown</a></code> | <code>*string</code> | The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warning">Warning</a></code> | <code>*string</code> | The monitor `WARNING` threshold. Must be a number. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery">WarningRecovery</a></code> | <code>*string</code> | The monitor `WARNING` recovery threshold. Must be a number. |

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.critical"></a>

```go
Critical *string
```

- *Type:* *string

The monitor `CRITICAL` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#critical Monitor#critical}

---

##### `CriticalRecovery`<sup>Optional</sup> <a name="CriticalRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery"></a>

```go
CriticalRecovery *string
```

- *Type:* *string

The monitor `CRITICAL` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}

---

##### `Ok`<sup>Optional</sup> <a name="Ok" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.ok"></a>

```go
Ok *string
```

- *Type:* *string

The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#ok Monitor#ok}

---

##### `Unknown`<sup>Optional</sup> <a name="Unknown" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown"></a>

```go
Unknown *string
```

- *Type:* *string

The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#unknown Monitor#unknown}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warning"></a>

```go
Warning *string
```

- *Type:* *string

The monitor `WARNING` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#warning Monitor#warning}

---

##### `WarningRecovery`<sup>Optional</sup> <a name="WarningRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery"></a>

```go
WarningRecovery *string
```

- *Type:* *string

The monitor `WARNING` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}

---

### MonitorMonitorThresholdWindows <a name="MonitorMonitorThresholdWindows" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorMonitorThresholdWindows {
	RecoveryWindow: *string,
	TriggerWindow: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow">RecoveryWindow</a></code> | <code>*string</code> | Describes how long an anomalous metric must be normal before the alert recovers. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow">TriggerWindow</a></code> | <code>*string</code> | Describes how long a metric must be anomalous before an alert triggers. |

---

##### `RecoveryWindow`<sup>Optional</sup> <a name="RecoveryWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow"></a>

```go
RecoveryWindow *string
```

- *Type:* *string

Describes how long an anomalous metric must be normal before the alert recovers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#recovery_window Monitor#recovery_window}

---

##### `TriggerWindow`<sup>Optional</sup> <a name="TriggerWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow"></a>

```go
TriggerWindow *string
```

- *Type:* *string

Describes how long a metric must be anomalous before an alert triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#trigger_window Monitor#trigger_window}

---

### MonitorSchedulingOptions <a name="MonitorSchedulingOptions" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorSchedulingOptions {
	CustomSchedule: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorSchedulingOptionsCustomSchedule,
	EvaluationWindow: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorSchedulingOptionsEvaluationWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule">CustomSchedule</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | custom_schedule block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow">EvaluationWindow</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | evaluation_window block. |

---

##### `CustomSchedule`<sup>Optional</sup> <a name="CustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule"></a>

```go
CustomSchedule MonitorSchedulingOptionsCustomSchedule
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

custom_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}

---

##### `EvaluationWindow`<sup>Optional</sup> <a name="EvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow"></a>

```go
EvaluationWindow MonitorSchedulingOptionsEvaluationWindow
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

evaluation_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}

---

### MonitorSchedulingOptionsCustomSchedule <a name="MonitorSchedulingOptionsCustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorSchedulingOptionsCustomSchedule {
	Recurrence: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | recurrence block. |

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence"></a>

```go
Recurrence MonitorSchedulingOptionsCustomScheduleRecurrence
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#recurrence Monitor#recurrence}

---

### MonitorSchedulingOptionsCustomScheduleRecurrence <a name="MonitorSchedulingOptionsCustomScheduleRecurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorSchedulingOptionsCustomScheduleRecurrence {
	Rrule: *string,
	Timezone: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule">Rrule</a></code> | <code>*string</code> | Must be a valid `rrule`. See API docs for supported fields. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone">Timezone</a></code> | <code>*string</code> | 'tz database' format. Example: `America/New_York` or `UTC`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start">Start</a></code> | <code>*string</code> | Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'. |

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule"></a>

```go
Rrule *string
```

- *Type:* *string

Must be a valid `rrule`. See API docs for supported fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#rrule Monitor#rrule}

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

'tz database' format. Example: `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#timezone Monitor#timezone}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start"></a>

```go
Start *string
```

- *Type:* *string

Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#start Monitor#start}

---

### MonitorSchedulingOptionsEvaluationWindow <a name="MonitorSchedulingOptionsEvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorSchedulingOptionsEvaluationWindow {
	DayStarts: *string,
	HourStarts: *f64,
	MonthStarts: *f64,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts">DayStarts</a></code> | <code>*string</code> | The time of the day at which a one day cumulative evaluation window starts. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts">HourStarts</a></code> | <code>*f64</code> | The minute of the hour at which a one hour cumulative evaluation window starts. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts">MonthStarts</a></code> | <code>*f64</code> | The day of the month at which a one month cumulative evaluation window starts. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.timezone">Timezone</a></code> | <code>*string</code> | The timezone for the cumulative evaluation window start time. |

---

##### `DayStarts`<sup>Optional</sup> <a name="DayStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts"></a>

```go
DayStarts *string
```

- *Type:* *string

The time of the day at which a one day cumulative evaluation window starts.

Must be defined in UTC time in `HH:mm` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#day_starts Monitor#day_starts}

---

##### `HourStarts`<sup>Optional</sup> <a name="HourStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts"></a>

```go
HourStarts *f64
```

- *Type:* *f64

The minute of the hour at which a one hour cumulative evaluation window starts.

Must be between 0 and 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#hour_starts Monitor#hour_starts}

---

##### `MonthStarts`<sup>Optional</sup> <a name="MonthStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts"></a>

```go
MonthStarts *f64
```

- *Type:* *f64

The day of the month at which a one month cumulative evaluation window starts.

Must be a value of 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#month_starts Monitor#month_starts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The timezone for the cumulative evaluation window start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#timezone Monitor#timezone}

---

### MonitorVariables <a name="MonitorVariables" id="@cdktn/provider-datadog.monitor.MonitorVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariables {
	CloudCostQuery: interface{},
	DataQualityQuery: interface{},
	EventQuery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables.property.cloudCostQuery">CloudCostQuery</a></code> | <code>interface{}</code> | cloud_cost_query block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables.property.dataQualityQuery">DataQualityQuery</a></code> | <code>interface{}</code> | data_quality_query block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables.property.eventQuery">EventQuery</a></code> | <code>interface{}</code> | event_query block. |

---

##### `CloudCostQuery`<sup>Optional</sup> <a name="CloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariables.property.cloudCostQuery"></a>

```go
CloudCostQuery interface{}
```

- *Type:* interface{}

cloud_cost_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#cloud_cost_query Monitor#cloud_cost_query}

---

##### `DataQualityQuery`<sup>Optional</sup> <a name="DataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariables.property.dataQualityQuery"></a>

```go
DataQualityQuery interface{}
```

- *Type:* interface{}

data_quality_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#data_quality_query Monitor#data_quality_query}

---

##### `EventQuery`<sup>Optional</sup> <a name="EventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariables.property.eventQuery"></a>

```go
EventQuery interface{}
```

- *Type:* interface{}

event_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#event_query Monitor#event_query}

---

### MonitorVariablesCloudCostQuery <a name="MonitorVariablesCloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesCloudCostQuery {
	Aggregator: *string,
	DataSource: *string,
	Name: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.aggregator">Aggregator</a></code> | <code>*string</code> | The aggregation methods available for cloud cost queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.dataSource">DataSource</a></code> | <code>*string</code> | The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.name">Name</a></code> | <code>*string</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.query">Query</a></code> | <code>*string</code> | The cloud cost query definition. |

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.aggregator"></a>

```go
Aggregator *string
```

- *Type:* *string

The aggregation methods available for cloud cost queries.

Valid values are `avg`, `sum`, `max`, `min`, `last`, `area`, `l2norm`, `percentile`, `stddev`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#aggregator Monitor#aggregator}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#name Monitor#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The cloud cost query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#query Monitor#query}

---

### MonitorVariablesDataQualityQuery <a name="MonitorVariablesDataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesDataQualityQuery {
	DataSource: *string,
	Filter: *string,
	Measure: *string,
	Name: *string,
	GroupBy: *[]*string,
	MonitorOptions: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorVariablesDataQualityQueryMonitorOptions,
	SchemaVersion: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.dataSource">DataSource</a></code> | <code>*string</code> | The data source for data quality queries. Valid value is `data_quality_metrics`. Valid values are `data_quality_metrics`. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.filter">Filter</a></code> | <code>*string</code> | Filter expression used to match on data entities. Uses AAstra query syntax. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.measure">Measure</a></code> | <code>*string</code> | The measure to query. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.name">Name</a></code> | <code>*string</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Optional grouping fields for aggregation. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a></code> | monitor_options block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | Schema version for the data quality query. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.scope">Scope</a></code> | <code>*string</code> | Optional scoping expression to further filter metrics. |

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The data source for data quality queries. Valid value is `data_quality_metrics`. Valid values are `data_quality_metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Filter expression used to match on data entities. Uses AAstra query syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#filter Monitor#filter}

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.measure"></a>

```go
Measure *string
```

- *Type:* *string

The measure to query.

Common values include `bytes`, `cardinality`, `custom`, `freshness`, `max`, `mean`, `min`, `nullness`, `percent_negative`, `percent_zero`, `row_count`, `stddev`, `sum`, `uniqueness`. Additional values may be supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#measure Monitor#measure}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#name Monitor#name}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Optional grouping fields for aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#group_by Monitor#group_by}

---

##### `MonitorOptions`<sup>Optional</sup> <a name="MonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.monitorOptions"></a>

```go
MonitorOptions MonitorVariablesDataQualityQueryMonitorOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

monitor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#monitor_options Monitor#monitor_options}

---

##### `SchemaVersion`<sup>Optional</sup> <a name="SchemaVersion" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.schemaVersion"></a>

```go
SchemaVersion *string
```

- *Type:* *string

Schema version for the data quality query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#schema_version Monitor#schema_version}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQuery.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Optional scoping expression to further filter metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#scope Monitor#scope}

---

### MonitorVariablesDataQualityQueryMonitorOptions <a name="MonitorVariablesDataQualityQueryMonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesDataQualityQueryMonitorOptions {
	CrontabOverride: *string,
	CustomSql: *string,
	CustomWhere: *string,
	GroupByColumns: *[]*string,
	ModelTypeOverride: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.crontabOverride">CrontabOverride</a></code> | <code>*string</code> | Crontab expression to override the default schedule. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customSql">CustomSql</a></code> | <code>*string</code> | Custom SQL query for the monitor. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customWhere">CustomWhere</a></code> | <code>*string</code> | Custom WHERE clause for the query. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.groupByColumns">GroupByColumns</a></code> | <code>*[]*string</code> | Columns to group results by. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.modelTypeOverride">ModelTypeOverride</a></code> | <code>*string</code> | Override for the model type. Valid values are `freshness`, `percentage`, `any`. |

---

##### `CrontabOverride`<sup>Optional</sup> <a name="CrontabOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.crontabOverride"></a>

```go
CrontabOverride *string
```

- *Type:* *string

Crontab expression to override the default schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#crontab_override Monitor#crontab_override}

---

##### `CustomSql`<sup>Optional</sup> <a name="CustomSql" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customSql"></a>

```go
CustomSql *string
```

- *Type:* *string

Custom SQL query for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#custom_sql Monitor#custom_sql}

---

##### `CustomWhere`<sup>Optional</sup> <a name="CustomWhere" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.customWhere"></a>

```go
CustomWhere *string
```

- *Type:* *string

Custom WHERE clause for the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#custom_where Monitor#custom_where}

---

##### `GroupByColumns`<sup>Optional</sup> <a name="GroupByColumns" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.groupByColumns"></a>

```go
GroupByColumns *[]*string
```

- *Type:* *[]*string

Columns to group results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#group_by_columns Monitor#group_by_columns}

---

##### `ModelTypeOverride`<sup>Optional</sup> <a name="ModelTypeOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions.property.modelTypeOverride"></a>

```go
ModelTypeOverride *string
```

- *Type:* *string

Override for the model type. Valid values are `freshness`, `percentage`, `any`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#model_type_override Monitor#model_type_override}

---

### MonitorVariablesEventQuery <a name="MonitorVariablesEventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesEventQuery {
	Compute: interface{},
	DataSource: *string,
	Name: *string,
	Search: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorVariablesEventQuerySearch,
	GroupBy: interface{},
	Indexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute">Compute</a></code> | <code>interface{}</code> | compute block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource">DataSource</a></code> | <code>*string</code> | The data source for event platform-based queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.name">Name</a></code> | <code>*string</code> | The name of query for use in formulas. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.search">Search</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | search block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy">GroupBy</a></code> | <code>interface{}</code> | group_by block. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes">Indexes</a></code> | <code>*[]*string</code> | An array of index names to query in the stream. |

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute"></a>

```go
Compute interface{}
```

- *Type:* interface{}

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#compute Monitor#compute}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The data source for event platform-based queries.

Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`, `network_path`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#name Monitor#name}

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.search"></a>

```go
Search MonitorVariablesEventQuerySearch
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#search Monitor#search}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy"></a>

```go
GroupBy interface{}
```

- *Type:* interface{}

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#group_by Monitor#group_by}

---

##### `Indexes`<sup>Optional</sup> <a name="Indexes" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes"></a>

```go
Indexes *[]*string
```

- *Type:* *[]*string

An array of index names to query in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#indexes Monitor#indexes}

---

### MonitorVariablesEventQueryCompute <a name="MonitorVariablesEventQueryCompute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesEventQueryCompute {
	Aggregation: *string,
	Interval: *f64,
	Metric: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation">Aggregation</a></code> | <code>*string</code> | The aggregation methods for event platform queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval">Interval</a></code> | <code>*f64</code> | A time interval in milliseconds. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric">Metric</a></code> | <code>*string</code> | The measurable attribute to compute. |

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

The aggregation methods for event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

A time interval in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#interval Monitor#interval}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The measurable attribute to compute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#metric Monitor#metric}

---

### MonitorVariablesEventQueryGroupBy <a name="MonitorVariablesEventQueryGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesEventQueryGroupBy {
	Facet: *string,
	Limit: *f64,
	Sort: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13.monitor.MonitorVariablesEventQueryGroupBySort,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet">Facet</a></code> | <code>*string</code> | The event facet. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit">Limit</a></code> | <code>*f64</code> | The number of groups to return. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort">Sort</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | sort block. |

---

##### `Facet`<sup>Required</sup> <a name="Facet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet"></a>

```go
Facet *string
```

- *Type:* *string

The event facet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#facet Monitor#facet}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

The number of groups to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#limit Monitor#limit}

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort"></a>

```go
Sort MonitorVariablesEventQueryGroupBySort
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#sort Monitor#sort}

---

### MonitorVariablesEventQueryGroupBySort <a name="MonitorVariablesEventQueryGroupBySort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesEventQueryGroupBySort {
	Aggregation: *string,
	Metric: *string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation">Aggregation</a></code> | <code>*string</code> | The aggregation methods for the event platform queries. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric">Metric</a></code> | <code>*string</code> | The metric used for sorting group by results. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order">Order</a></code> | <code>*string</code> | Direction of sort. Valid values are `asc`, `desc`. |

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

The aggregation methods for the event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The metric used for sorting group by results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#metric Monitor#metric}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order"></a>

```go
Order *string
```

- *Type:* *string

Direction of sort. Valid values are `asc`, `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#order Monitor#order}

---

### MonitorVariablesEventQuerySearch <a name="MonitorVariablesEventQuerySearch" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

&monitor.MonitorVariablesEventQuerySearch {
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query">Query</a></code> | <code>*string</code> | The events search string. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query"></a>

```go
Query *string
```

- *Type:* *string

The events search string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/monitor#query Monitor#query}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAssetsList <a name="MonitorAssetsList" id="@cdktn/provider-datadog.monitor.MonitorAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorAssetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorAssetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.get"></a>

```go
func Get(index *f64) MonitorAssetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorAssetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorAssetsOutputReference <a name="MonitorAssetsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceKey">ResetResourceKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceKey` <a name="ResetResourceKey" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceKey"></a>

```go
func ResetResourceKey()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKeyInput">ResourceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKey">ResourceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceKeyInput`<sup>Optional</sup> <a name="ResourceKeyInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKeyInput"></a>

```go
func ResourceKeyInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceKey`<sup>Required</sup> <a name="ResourceKey" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceKey"></a>

```go
func ResourceKey() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorMonitorThresholdsOutputReference <a name="MonitorMonitorThresholdsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorMonitorThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorMonitorThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical">ResetCritical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery">ResetCriticalRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk">ResetOk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown">ResetUnknown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery">ResetWarningRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCritical` <a name="ResetCritical" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical"></a>

```go
func ResetCritical()
```

##### `ResetCriticalRecovery` <a name="ResetCriticalRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery"></a>

```go
func ResetCriticalRecovery()
```

##### `ResetOk` <a name="ResetOk" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk"></a>

```go
func ResetOk()
```

##### `ResetUnknown` <a name="ResetUnknown" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown"></a>

```go
func ResetUnknown()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning"></a>

```go
func ResetWarning()
```

##### `ResetWarningRecovery` <a name="ResetWarningRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery"></a>

```go
func ResetWarningRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput">CriticalRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput">OkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput">UnknownInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput">WarningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput">WarningRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical">Critical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery">CriticalRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok">Ok</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown">Unknown</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning">Warning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery">WarningRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput"></a>

```go
func CriticalInput() *string
```

- *Type:* *string

---

##### `CriticalRecoveryInput`<sup>Optional</sup> <a name="CriticalRecoveryInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput"></a>

```go
func CriticalRecoveryInput() *string
```

- *Type:* *string

---

##### `OkInput`<sup>Optional</sup> <a name="OkInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput"></a>

```go
func OkInput() *string
```

- *Type:* *string

---

##### `UnknownInput`<sup>Optional</sup> <a name="UnknownInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput"></a>

```go
func UnknownInput() *string
```

- *Type:* *string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput"></a>

```go
func WarningInput() *string
```

- *Type:* *string

---

##### `WarningRecoveryInput`<sup>Optional</sup> <a name="WarningRecoveryInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput"></a>

```go
func WarningRecoveryInput() *string
```

- *Type:* *string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical"></a>

```go
func Critical() *string
```

- *Type:* *string

---

##### `CriticalRecovery`<sup>Required</sup> <a name="CriticalRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery"></a>

```go
func CriticalRecovery() *string
```

- *Type:* *string

---

##### `Ok`<sup>Required</sup> <a name="Ok" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok"></a>

```go
func Ok() *string
```

- *Type:* *string

---

##### `Unknown`<sup>Required</sup> <a name="Unknown" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown"></a>

```go
func Unknown() *string
```

- *Type:* *string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning"></a>

```go
func Warning() *string
```

- *Type:* *string

---

##### `WarningRecovery`<sup>Required</sup> <a name="WarningRecovery" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery"></a>

```go
func WarningRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorMonitorThresholds
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---


### MonitorMonitorThresholdWindowsOutputReference <a name="MonitorMonitorThresholdWindowsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorMonitorThresholdWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorMonitorThresholdWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow">ResetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow">ResetTriggerWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecoveryWindow` <a name="ResetRecoveryWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow"></a>

```go
func ResetRecoveryWindow()
```

##### `ResetTriggerWindow` <a name="ResetTriggerWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow"></a>

```go
func ResetTriggerWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput">RecoveryWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput">TriggerWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow">RecoveryWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow">TriggerWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecoveryWindowInput`<sup>Optional</sup> <a name="RecoveryWindowInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput"></a>

```go
func RecoveryWindowInput() *string
```

- *Type:* *string

---

##### `TriggerWindowInput`<sup>Optional</sup> <a name="TriggerWindowInput" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput"></a>

```go
func TriggerWindowInput() *string
```

- *Type:* *string

---

##### `RecoveryWindow`<sup>Required</sup> <a name="RecoveryWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow"></a>

```go
func RecoveryWindow() *string
```

- *Type:* *string

---

##### `TriggerWindow`<sup>Required</sup> <a name="TriggerWindow" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow"></a>

```go
func TriggerWindow() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorMonitorThresholdWindows
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---


### MonitorSchedulingOptionsCustomScheduleOutputReference <a name="MonitorSchedulingOptionsCustomScheduleOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorSchedulingOptionsCustomScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorSchedulingOptionsCustomScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence"></a>

```go
func PutRecurrence(value MonitorSchedulingOptionsCustomScheduleRecurrence)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence"></a>

```go
func Recurrence() MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() MonitorSchedulingOptionsCustomScheduleRecurrence
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorSchedulingOptionsCustomSchedule
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---


### MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference <a name="MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput">RruleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule">Rrule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput"></a>

```go
func RruleInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule"></a>

```go
func Rrule() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorSchedulingOptionsCustomScheduleRecurrence
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


### MonitorSchedulingOptionsEvaluationWindowOutputReference <a name="MonitorSchedulingOptionsEvaluationWindowOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorSchedulingOptionsEvaluationWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorSchedulingOptionsEvaluationWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts">ResetDayStarts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts">ResetHourStarts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts">ResetMonthStarts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayStarts` <a name="ResetDayStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts"></a>

```go
func ResetDayStarts()
```

##### `ResetHourStarts` <a name="ResetHourStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts"></a>

```go
func ResetHourStarts()
```

##### `ResetMonthStarts` <a name="ResetMonthStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts"></a>

```go
func ResetMonthStarts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput">DayStartsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput">HourStartsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput">MonthStartsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts">DayStarts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts">HourStarts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts">MonthStarts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayStartsInput`<sup>Optional</sup> <a name="DayStartsInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput"></a>

```go
func DayStartsInput() *string
```

- *Type:* *string

---

##### `HourStartsInput`<sup>Optional</sup> <a name="HourStartsInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput"></a>

```go
func HourStartsInput() *f64
```

- *Type:* *f64

---

##### `MonthStartsInput`<sup>Optional</sup> <a name="MonthStartsInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput"></a>

```go
func MonthStartsInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `DayStarts`<sup>Required</sup> <a name="DayStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts"></a>

```go
func DayStarts() *string
```

- *Type:* *string

---

##### `HourStarts`<sup>Required</sup> <a name="HourStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts"></a>

```go
func HourStarts() *f64
```

- *Type:* *f64

---

##### `MonthStarts`<sup>Required</sup> <a name="MonthStarts" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts"></a>

```go
func MonthStarts() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorSchedulingOptionsEvaluationWindow
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---


### MonitorSchedulingOptionsOutputReference <a name="MonitorSchedulingOptionsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorSchedulingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorSchedulingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule">PutCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow">PutEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule">ResetCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow">ResetEvaluationWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomSchedule` <a name="PutCustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule"></a>

```go
func PutCustomSchedule(value MonitorSchedulingOptionsCustomSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `PutEvaluationWindow` <a name="PutEvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow"></a>

```go
func PutEvaluationWindow(value MonitorSchedulingOptionsEvaluationWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `ResetCustomSchedule` <a name="ResetCustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule"></a>

```go
func ResetCustomSchedule()
```

##### `ResetEvaluationWindow` <a name="ResetEvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow"></a>

```go
func ResetEvaluationWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule">CustomSchedule</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow">EvaluationWindow</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput">CustomScheduleInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput">EvaluationWindowInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSchedule`<sup>Required</sup> <a name="CustomSchedule" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule"></a>

```go
func CustomSchedule() MonitorSchedulingOptionsCustomScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a>

---

##### `EvaluationWindow`<sup>Required</sup> <a name="EvaluationWindow" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow"></a>

```go
func EvaluationWindow() MonitorSchedulingOptionsEvaluationWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a>

---

##### `CustomScheduleInput`<sup>Optional</sup> <a name="CustomScheduleInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput"></a>

```go
func CustomScheduleInput() MonitorSchedulingOptionsCustomSchedule
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `EvaluationWindowInput`<sup>Optional</sup> <a name="EvaluationWindowInput" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput"></a>

```go
func EvaluationWindowInput() MonitorSchedulingOptionsEvaluationWindow
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorSchedulingOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---


### MonitorVariablesCloudCostQueryList <a name="MonitorVariablesCloudCostQueryList" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesCloudCostQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorVariablesCloudCostQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get"></a>

```go
func Get(index *f64) MonitorVariablesCloudCostQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesCloudCostQueryOutputReference <a name="MonitorVariablesCloudCostQueryOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesCloudCostQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorVariablesCloudCostQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregatorInput">AggregatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregator">Aggregator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorInput`<sup>Optional</sup> <a name="AggregatorInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregatorInput"></a>

```go
func AggregatorInput() *string
```

- *Type:* *string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregator"></a>

```go
func Aggregator() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesDataQualityQueryList <a name="MonitorVariablesDataQualityQueryList" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesDataQualityQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorVariablesDataQualityQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.get"></a>

```go
func Get(index *f64) MonitorVariablesDataQualityQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesDataQualityQueryMonitorOptionsOutputReference <a name="MonitorVariablesDataQualityQueryMonitorOptionsOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesDataQualityQueryMonitorOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorVariablesDataQualityQueryMonitorOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCrontabOverride">ResetCrontabOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomSql">ResetCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomWhere">ResetCustomWhere</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetGroupByColumns">ResetGroupByColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetModelTypeOverride">ResetModelTypeOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrontabOverride` <a name="ResetCrontabOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCrontabOverride"></a>

```go
func ResetCrontabOverride()
```

##### `ResetCustomSql` <a name="ResetCustomSql" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomSql"></a>

```go
func ResetCustomSql()
```

##### `ResetCustomWhere` <a name="ResetCustomWhere" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetCustomWhere"></a>

```go
func ResetCustomWhere()
```

##### `ResetGroupByColumns` <a name="ResetGroupByColumns" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetGroupByColumns"></a>

```go
func ResetGroupByColumns()
```

##### `ResetModelTypeOverride` <a name="ResetModelTypeOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.resetModelTypeOverride"></a>

```go
func ResetModelTypeOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverrideInput">CrontabOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSqlInput">CustomSqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhereInput">CustomWhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumnsInput">GroupByColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverrideInput">ModelTypeOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverride">CrontabOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSql">CustomSql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhere">CustomWhere</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumns">GroupByColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverride">ModelTypeOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrontabOverrideInput`<sup>Optional</sup> <a name="CrontabOverrideInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverrideInput"></a>

```go
func CrontabOverrideInput() *string
```

- *Type:* *string

---

##### `CustomSqlInput`<sup>Optional</sup> <a name="CustomSqlInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSqlInput"></a>

```go
func CustomSqlInput() *string
```

- *Type:* *string

---

##### `CustomWhereInput`<sup>Optional</sup> <a name="CustomWhereInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhereInput"></a>

```go
func CustomWhereInput() *string
```

- *Type:* *string

---

##### `GroupByColumnsInput`<sup>Optional</sup> <a name="GroupByColumnsInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumnsInput"></a>

```go
func GroupByColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ModelTypeOverrideInput`<sup>Optional</sup> <a name="ModelTypeOverrideInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverrideInput"></a>

```go
func ModelTypeOverrideInput() *string
```

- *Type:* *string

---

##### `CrontabOverride`<sup>Required</sup> <a name="CrontabOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.crontabOverride"></a>

```go
func CrontabOverride() *string
```

- *Type:* *string

---

##### `CustomSql`<sup>Required</sup> <a name="CustomSql" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customSql"></a>

```go
func CustomSql() *string
```

- *Type:* *string

---

##### `CustomWhere`<sup>Required</sup> <a name="CustomWhere" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.customWhere"></a>

```go
func CustomWhere() *string
```

- *Type:* *string

---

##### `GroupByColumns`<sup>Required</sup> <a name="GroupByColumns" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.groupByColumns"></a>

```go
func GroupByColumns() *[]*string
```

- *Type:* *[]*string

---

##### `ModelTypeOverride`<sup>Required</sup> <a name="ModelTypeOverride" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.modelTypeOverride"></a>

```go
func ModelTypeOverride() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorVariablesDataQualityQueryMonitorOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

---


### MonitorVariablesDataQualityQueryOutputReference <a name="MonitorVariablesDataQualityQueryOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesDataQualityQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorVariablesDataQualityQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.putMonitorOptions">PutMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetMonitorOptions">ResetMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetSchemaVersion">ResetSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitorOptions` <a name="PutMonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.putMonitorOptions"></a>

```go
func PutMonitorOptions(value MonitorVariablesDataQualityQueryMonitorOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.putMonitorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

---

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetMonitorOptions` <a name="ResetMonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetMonitorOptions"></a>

```go
func ResetMonitorOptions()
```

##### `ResetSchemaVersion` <a name="ResetSchemaVersion" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetSchemaVersion"></a>

```go
func ResetSchemaVersion()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference">MonitorVariablesDataQualityQueryMonitorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measureInput">MeasureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptionsInput">MonitorOptionsInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersionInput">SchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measure">Measure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitorOptions`<sup>Required</sup> <a name="MonitorOptions" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptions"></a>

```go
func MonitorOptions() MonitorVariablesDataQualityQueryMonitorOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptionsOutputReference">MonitorVariablesDataQualityQueryMonitorOptionsOutputReference</a>

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `MeasureInput`<sup>Optional</sup> <a name="MeasureInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measureInput"></a>

```go
func MeasureInput() *string
```

- *Type:* *string

---

##### `MonitorOptionsInput`<sup>Optional</sup> <a name="MonitorOptionsInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.monitorOptionsInput"></a>

```go
func MonitorOptionsInput() MonitorVariablesDataQualityQueryMonitorOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryMonitorOptions">MonitorVariablesDataQualityQueryMonitorOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaVersionInput`<sup>Optional</sup> <a name="SchemaVersionInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersionInput"></a>

```go
func SchemaVersionInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.measure"></a>

```go
func Measure() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.schemaVersion"></a>

```go
func SchemaVersion() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQueryComputeList <a name="MonitorVariablesEventQueryComputeList" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryComputeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorVariablesEventQueryComputeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get"></a>

```go
func Get(index *f64) MonitorVariablesEventQueryComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQueryComputeOutputReference <a name="MonitorVariablesEventQueryComputeOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorVariablesEventQueryComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric"></a>

```go
func ResetMetric()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQueryGroupByList <a name="MonitorVariablesEventQueryGroupByList" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryGroupByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorVariablesEventQueryGroupByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get"></a>

```go
func Get(index *f64) MonitorVariablesEventQueryGroupByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQueryGroupByOutputReference <a name="MonitorVariablesEventQueryGroupByOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryGroupByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorVariablesEventQueryGroupByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSort` <a name="PutSort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort"></a>

```go
func PutSort(value MonitorVariablesEventQueryGroupBySort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetSort` <a name="ResetSort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort"></a>

```go
func ResetSort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort">Sort</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput">FacetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput">SortInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet">Facet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort"></a>

```go
func Sort() MonitorVariablesEventQueryGroupBySortOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a>

---

##### `FacetInput`<sup>Optional</sup> <a name="FacetInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput"></a>

```go
func FacetInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput"></a>

```go
func SortInput() MonitorVariablesEventQueryGroupBySort
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `Facet`<sup>Required</sup> <a name="Facet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet"></a>

```go
func Facet() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQueryGroupBySortOutputReference <a name="MonitorVariablesEventQueryGroupBySortOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryGroupBySortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorVariablesEventQueryGroupBySortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorVariablesEventQueryGroupBySort
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---


### MonitorVariablesEventQueryList <a name="MonitorVariablesEventQueryList" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorVariablesEventQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.get"></a>

```go
func Get(index *f64) MonitorVariablesEventQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQueryOutputReference <a name="MonitorVariablesEventQueryOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorVariablesEventQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy">PutGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes">ResetIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompute` <a name="PutCompute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute"></a>

```go
func PutCompute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGroupBy` <a name="PutGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy"></a>

```go
func PutGroupBy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSearch` <a name="PutSearch" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch"></a>

```go
func PutSearch(value MonitorVariablesEventQuerySearch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetIndexes` <a name="ResetIndexes" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes"></a>

```go
func ResetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute">Compute</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy">GroupBy</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search">Search</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput">ComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput">GroupByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput">IndexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput">SearchInput</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes">Indexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute"></a>

```go
func Compute() MonitorVariablesEventQueryComputeList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a>

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy"></a>

```go
func GroupBy() MonitorVariablesEventQueryGroupByList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a>

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search"></a>

```go
func Search() MonitorVariablesEventQuerySearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a>

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput"></a>

```go
func ComputeInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput"></a>

```go
func GroupByInput() interface{}
```

- *Type:* interface{}

---

##### `IndexesInput`<sup>Optional</sup> <a name="IndexesInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput"></a>

```go
func IndexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput"></a>

```go
func SearchInput() MonitorVariablesEventQuerySearch
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes"></a>

```go
func Indexes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorVariablesEventQuerySearchOutputReference <a name="MonitorVariablesEventQuerySearchOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesEventQuerySearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorVariablesEventQuerySearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorVariablesEventQuerySearch
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---


### MonitorVariablesOutputReference <a name="MonitorVariablesOutputReference" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/monitor"

monitor.NewMonitorVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery">PutCloudCostQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putDataQualityQuery">PutDataQualityQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery">PutEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetCloudCostQuery">ResetCloudCostQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetDataQualityQuery">ResetDataQualityQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery">ResetEventQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudCostQuery` <a name="PutCloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery"></a>

```go
func PutCloudCostQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataQualityQuery` <a name="PutDataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putDataQualityQuery"></a>

```go
func PutDataQualityQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putDataQualityQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventQuery` <a name="PutEventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery"></a>

```go
func PutEventQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudCostQuery` <a name="ResetCloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetCloudCostQuery"></a>

```go
func ResetCloudCostQuery()
```

##### `ResetDataQualityQuery` <a name="ResetDataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetDataQualityQuery"></a>

```go
func ResetDataQualityQuery()
```

##### `ResetEventQuery` <a name="ResetEventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery"></a>

```go
func ResetEventQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQuery">CloudCostQuery</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList">MonitorVariablesCloudCostQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQuery">DataQualityQuery</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList">MonitorVariablesDataQualityQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery">EventQuery</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQueryInput">CloudCostQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQueryInput">DataQualityQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput">EventQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudCostQuery`<sup>Required</sup> <a name="CloudCostQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQuery"></a>

```go
func CloudCostQuery() MonitorVariablesCloudCostQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesCloudCostQueryList">MonitorVariablesCloudCostQueryList</a>

---

##### `DataQualityQuery`<sup>Required</sup> <a name="DataQualityQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQuery"></a>

```go
func DataQualityQuery() MonitorVariablesDataQualityQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesDataQualityQueryList">MonitorVariablesDataQualityQueryList</a>

---

##### `EventQuery`<sup>Required</sup> <a name="EventQuery" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery"></a>

```go
func EventQuery() MonitorVariablesEventQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a>

---

##### `CloudCostQueryInput`<sup>Optional</sup> <a name="CloudCostQueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQueryInput"></a>

```go
func CloudCostQueryInput() interface{}
```

- *Type:* interface{}

---

##### `DataQualityQueryInput`<sup>Optional</sup> <a name="DataQualityQueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.dataQualityQueryInput"></a>

```go
func DataQualityQueryInput() interface{}
```

- *Type:* interface{}

---

##### `EventQueryInput`<sup>Optional</sup> <a name="EventQueryInput" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput"></a>

```go
func EventQueryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorVariables
```

- *Type:* <a href="#@cdktn/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---



