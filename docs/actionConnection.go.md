# `actionConnection` Submodule <a name="`actionConnection` Submodule" id="@cdktn/provider-datadog.actionConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionConnection <a name="ActionConnection" id="@cdktn/provider-datadog.actionConnection.ActionConnection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection datadog_action_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnection(scope Construct, id *string, config ActionConnectionConfig) ActionConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig">ActionConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig">ActionConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putAnthropic">PutAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putAsana">PutAsana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putCircleCi">PutCircleCi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putClickup">PutClickup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putCloudflare">PutCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putConfigCat">PutConfigCat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putDatadog">PutDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putFastly">PutFastly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putFreshservice">PutFreshservice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putGcp">PutGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putGemini">PutGemini</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putGitlab">PutGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putGreyNoise">PutGreyNoise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putLaunchDarkly">PutLaunchDarkly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putNotion">PutNotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putOpenai">PutOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putSplit">PutSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putStatsig">PutStatsig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.putVirusTotal">PutVirusTotal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetAnthropic">ResetAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetAsana">ResetAsana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetCircleCi">ResetCircleCi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetClickup">ResetClickup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetCloudflare">ResetCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetConfigCat">ResetConfigCat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetDatadog">ResetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetFastly">ResetFastly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetFreshservice">ResetFreshservice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetGcp">ResetGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetGemini">ResetGemini</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetGitlab">ResetGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetGreyNoise">ResetGreyNoise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetHttp">ResetHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetLaunchDarkly">ResetLaunchDarkly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetNotion">ResetNotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetOpenai">ResetOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetSplit">ResetSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetStatsig">ResetStatsig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.resetVirusTotal">ResetVirusTotal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.actionConnection.ActionConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.actionConnection.ActionConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.actionConnection.ActionConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.actionConnection.ActionConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.actionConnection.ActionConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.actionConnection.ActionConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.actionConnection.ActionConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.actionConnection.ActionConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionConnection.ActionConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.actionConnection.ActionConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.actionConnection.ActionConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionConnection.ActionConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionConnection.ActionConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionConnection.ActionConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnthropic` <a name="PutAnthropic" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAnthropic"></a>

```go
func PutAnthropic(value ActionConnectionAnthropic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAnthropic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic">ActionConnectionAnthropic</a>

---

##### `PutAsana` <a name="PutAsana" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAsana"></a>

```go
func PutAsana(value ActionConnectionAsana)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAsana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsana">ActionConnectionAsana</a>

---

##### `PutAws` <a name="PutAws" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAws"></a>

```go
func PutAws(value ActionConnectionAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAzure"></a>

```go
func PutAzure(value ActionConnectionAzure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzure">ActionConnectionAzure</a>

---

##### `PutCircleCi` <a name="PutCircleCi" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putCircleCi"></a>

```go
func PutCircleCi(value ActionConnectionCircleCi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putCircleCi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi">ActionConnectionCircleCi</a>

---

##### `PutClickup` <a name="PutClickup" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putClickup"></a>

```go
func PutClickup(value ActionConnectionClickup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putClickup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickup">ActionConnectionClickup</a>

---

##### `PutCloudflare` <a name="PutCloudflare" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putCloudflare"></a>

```go
func PutCloudflare(value ActionConnectionCloudflare)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putCloudflare.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare">ActionConnectionCloudflare</a>

---

##### `PutConfigCat` <a name="PutConfigCat" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putConfigCat"></a>

```go
func PutConfigCat(value ActionConnectionConfigCat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putConfigCat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat">ActionConnectionConfigCat</a>

---

##### `PutDatadog` <a name="PutDatadog" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putDatadog"></a>

```go
func PutDatadog(value ActionConnectionDatadog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog">ActionConnectionDatadog</a>

---

##### `PutFastly` <a name="PutFastly" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putFastly"></a>

```go
func PutFastly(value ActionConnectionFastly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putFastly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastly">ActionConnectionFastly</a>

---

##### `PutFreshservice` <a name="PutFreshservice" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putFreshservice"></a>

```go
func PutFreshservice(value ActionConnectionFreshservice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putFreshservice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice">ActionConnectionFreshservice</a>

---

##### `PutGcp` <a name="PutGcp" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGcp"></a>

```go
func PutGcp(value ActionConnectionGcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcp">ActionConnectionGcp</a>

---

##### `PutGemini` <a name="PutGemini" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGemini"></a>

```go
func PutGemini(value ActionConnectionGemini)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGemini.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGemini">ActionConnectionGemini</a>

---

##### `PutGitlab` <a name="PutGitlab" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGitlab"></a>

```go
func PutGitlab(value ActionConnectionGitlab)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGitlab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab">ActionConnectionGitlab</a>

---

##### `PutGreyNoise` <a name="PutGreyNoise" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGreyNoise"></a>

```go
func PutGreyNoise(value ActionConnectionGreyNoise)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putGreyNoise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise">ActionConnectionGreyNoise</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putHttp"></a>

```go
func PutHttp(value ActionConnectionHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

---

##### `PutLaunchDarkly` <a name="PutLaunchDarkly" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putLaunchDarkly"></a>

```go
func PutLaunchDarkly(value ActionConnectionLaunchDarkly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putLaunchDarkly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly">ActionConnectionLaunchDarkly</a>

---

##### `PutNotion` <a name="PutNotion" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putNotion"></a>

```go
func PutNotion(value ActionConnectionNotion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putNotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotion">ActionConnectionNotion</a>

---

##### `PutOkta` <a name="PutOkta" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putOkta"></a>

```go
func PutOkta(value ActionConnectionOkta)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putOkta.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOkta">ActionConnectionOkta</a>

---

##### `PutOpenai` <a name="PutOpenai" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putOpenai"></a>

```go
func PutOpenai(value ActionConnectionOpenai)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai">ActionConnectionOpenai</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putServiceNow"></a>

```go
func PutServiceNow(value ActionConnectionServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow">ActionConnectionServiceNow</a>

---

##### `PutSplit` <a name="PutSplit" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putSplit"></a>

```go
func PutSplit(value ActionConnectionSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplit">ActionConnectionSplit</a>

---

##### `PutStatsig` <a name="PutStatsig" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putStatsig"></a>

```go
func PutStatsig(value ActionConnectionStatsig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putStatsig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig">ActionConnectionStatsig</a>

---

##### `PutVirusTotal` <a name="PutVirusTotal" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putVirusTotal"></a>

```go
func PutVirusTotal(value ActionConnectionVirusTotal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnection.putVirusTotal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal">ActionConnectionVirusTotal</a>

---

##### `ResetAnthropic` <a name="ResetAnthropic" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetAnthropic"></a>

```go
func ResetAnthropic()
```

##### `ResetAsana` <a name="ResetAsana" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetAsana"></a>

```go
func ResetAsana()
```

##### `ResetAws` <a name="ResetAws" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetAws"></a>

```go
func ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetCircleCi` <a name="ResetCircleCi" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetCircleCi"></a>

```go
func ResetCircleCi()
```

##### `ResetClickup` <a name="ResetClickup" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetClickup"></a>

```go
func ResetClickup()
```

##### `ResetCloudflare` <a name="ResetCloudflare" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetCloudflare"></a>

```go
func ResetCloudflare()
```

##### `ResetConfigCat` <a name="ResetConfigCat" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetConfigCat"></a>

```go
func ResetConfigCat()
```

##### `ResetDatadog` <a name="ResetDatadog" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetDatadog"></a>

```go
func ResetDatadog()
```

##### `ResetFastly` <a name="ResetFastly" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetFastly"></a>

```go
func ResetFastly()
```

##### `ResetFreshservice` <a name="ResetFreshservice" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetFreshservice"></a>

```go
func ResetFreshservice()
```

##### `ResetGcp` <a name="ResetGcp" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetGcp"></a>

```go
func ResetGcp()
```

##### `ResetGemini` <a name="ResetGemini" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetGemini"></a>

```go
func ResetGemini()
```

##### `ResetGitlab` <a name="ResetGitlab" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetGitlab"></a>

```go
func ResetGitlab()
```

##### `ResetGreyNoise` <a name="ResetGreyNoise" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetGreyNoise"></a>

```go
func ResetGreyNoise()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetHttp"></a>

```go
func ResetHttp()
```

##### `ResetLaunchDarkly` <a name="ResetLaunchDarkly" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetLaunchDarkly"></a>

```go
func ResetLaunchDarkly()
```

##### `ResetNotion` <a name="ResetNotion" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetNotion"></a>

```go
func ResetNotion()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetOkta"></a>

```go
func ResetOkta()
```

##### `ResetOpenai` <a name="ResetOpenai" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetOpenai"></a>

```go
func ResetOpenai()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetServiceNow"></a>

```go
func ResetServiceNow()
```

##### `ResetSplit` <a name="ResetSplit" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetSplit"></a>

```go
func ResetSplit()
```

##### `ResetStatsig` <a name="ResetStatsig" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetStatsig"></a>

```go
func ResetStatsig()
```

##### `ResetVirusTotal` <a name="ResetVirusTotal" id="@cdktn/provider-datadog.actionConnection.ActionConnection.resetVirusTotal"></a>

```go
func ResetVirusTotal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.actionConnection.ActionConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.ActionConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionConnection.ActionConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.actionConnection.ActionConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.ActionConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionConnection.ActionConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.ActionConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionConnection.ActionConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.actionConnection.ActionConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.ActionConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ActionConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ActionConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference">ActionConnectionAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.asana">Asana</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference">ActionConnectionAsanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference">ActionConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference">ActionConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.circleCi">CircleCi</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference">ActionConnectionCircleCiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.clickup">Clickup</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference">ActionConnectionClickupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.cloudflare">Cloudflare</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference">ActionConnectionCloudflareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.configCat">ConfigCat</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference">ActionConnectionConfigCatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.datadog">Datadog</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference">ActionConnectionDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.fastly">Fastly</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference">ActionConnectionFastlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.freshservice">Freshservice</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference">ActionConnectionFreshserviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference">ActionConnectionGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.gemini">Gemini</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference">ActionConnectionGeminiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference">ActionConnectionGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.greyNoise">GreyNoise</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference">ActionConnectionGreyNoiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.http">Http</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference">ActionConnectionHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.launchDarkly">LaunchDarkly</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference">ActionConnectionLaunchDarklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.notion">Notion</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference">ActionConnectionNotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.okta">Okta</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference">ActionConnectionOktaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference">ActionConnectionOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference">ActionConnectionServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.split">Split</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference">ActionConnectionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.statsig">Statsig</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference">ActionConnectionStatsigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.virusTotal">VirusTotal</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference">ActionConnectionVirusTotalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.anthropicInput">AnthropicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.asanaInput">AsanaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.awsInput">AwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.circleCiInput">CircleCiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.clickupInput">ClickupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.cloudflareInput">CloudflareInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.configCatInput">ConfigCatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.datadogInput">DatadogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.fastlyInput">FastlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.freshserviceInput">FreshserviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.gcpInput">GcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.geminiInput">GeminiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.gitlabInput">GitlabInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.greyNoiseInput">GreyNoiseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.httpInput">HttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.launchDarklyInput">LaunchDarklyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.notionInput">NotionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.oktaInput">OktaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.openaiInput">OpenaiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.splitInput">SplitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.statsigInput">StatsigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.virusTotalInput">VirusTotalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Anthropic`<sup>Required</sup> <a name="Anthropic" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.anthropic"></a>

```go
func Anthropic() ActionConnectionAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference">ActionConnectionAnthropicOutputReference</a>

---

##### `Asana`<sup>Required</sup> <a name="Asana" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.asana"></a>

```go
func Asana() ActionConnectionAsanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference">ActionConnectionAsanaOutputReference</a>

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.aws"></a>

```go
func Aws() ActionConnectionAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference">ActionConnectionAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.azure"></a>

```go
func Azure() ActionConnectionAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference">ActionConnectionAzureOutputReference</a>

---

##### `CircleCi`<sup>Required</sup> <a name="CircleCi" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.circleCi"></a>

```go
func CircleCi() ActionConnectionCircleCiOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference">ActionConnectionCircleCiOutputReference</a>

---

##### `Clickup`<sup>Required</sup> <a name="Clickup" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.clickup"></a>

```go
func Clickup() ActionConnectionClickupOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference">ActionConnectionClickupOutputReference</a>

---

##### `Cloudflare`<sup>Required</sup> <a name="Cloudflare" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.cloudflare"></a>

```go
func Cloudflare() ActionConnectionCloudflareOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference">ActionConnectionCloudflareOutputReference</a>

---

##### `ConfigCat`<sup>Required</sup> <a name="ConfigCat" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.configCat"></a>

```go
func ConfigCat() ActionConnectionConfigCatOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference">ActionConnectionConfigCatOutputReference</a>

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.datadog"></a>

```go
func Datadog() ActionConnectionDatadogOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference">ActionConnectionDatadogOutputReference</a>

---

##### `Fastly`<sup>Required</sup> <a name="Fastly" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.fastly"></a>

```go
func Fastly() ActionConnectionFastlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference">ActionConnectionFastlyOutputReference</a>

---

##### `Freshservice`<sup>Required</sup> <a name="Freshservice" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.freshservice"></a>

```go
func Freshservice() ActionConnectionFreshserviceOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference">ActionConnectionFreshserviceOutputReference</a>

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.gcp"></a>

```go
func Gcp() ActionConnectionGcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference">ActionConnectionGcpOutputReference</a>

---

##### `Gemini`<sup>Required</sup> <a name="Gemini" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.gemini"></a>

```go
func Gemini() ActionConnectionGeminiOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference">ActionConnectionGeminiOutputReference</a>

---

##### `Gitlab`<sup>Required</sup> <a name="Gitlab" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.gitlab"></a>

```go
func Gitlab() ActionConnectionGitlabOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference">ActionConnectionGitlabOutputReference</a>

---

##### `GreyNoise`<sup>Required</sup> <a name="GreyNoise" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.greyNoise"></a>

```go
func GreyNoise() ActionConnectionGreyNoiseOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference">ActionConnectionGreyNoiseOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.http"></a>

```go
func Http() ActionConnectionHttpOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference">ActionConnectionHttpOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LaunchDarkly`<sup>Required</sup> <a name="LaunchDarkly" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.launchDarkly"></a>

```go
func LaunchDarkly() ActionConnectionLaunchDarklyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference">ActionConnectionLaunchDarklyOutputReference</a>

---

##### `Notion`<sup>Required</sup> <a name="Notion" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.notion"></a>

```go
func Notion() ActionConnectionNotionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference">ActionConnectionNotionOutputReference</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.okta"></a>

```go
func Okta() ActionConnectionOktaOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference">ActionConnectionOktaOutputReference</a>

---

##### `Openai`<sup>Required</sup> <a name="Openai" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.openai"></a>

```go
func Openai() ActionConnectionOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference">ActionConnectionOpenaiOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.serviceNow"></a>

```go
func ServiceNow() ActionConnectionServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference">ActionConnectionServiceNowOutputReference</a>

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.split"></a>

```go
func Split() ActionConnectionSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference">ActionConnectionSplitOutputReference</a>

---

##### `Statsig`<sup>Required</sup> <a name="Statsig" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.statsig"></a>

```go
func Statsig() ActionConnectionStatsigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference">ActionConnectionStatsigOutputReference</a>

---

##### `VirusTotal`<sup>Required</sup> <a name="VirusTotal" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.virusTotal"></a>

```go
func VirusTotal() ActionConnectionVirusTotalOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference">ActionConnectionVirusTotalOutputReference</a>

---

##### `AnthropicInput`<sup>Optional</sup> <a name="AnthropicInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.anthropicInput"></a>

```go
func AnthropicInput() interface{}
```

- *Type:* interface{}

---

##### `AsanaInput`<sup>Optional</sup> <a name="AsanaInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.asanaInput"></a>

```go
func AsanaInput() interface{}
```

- *Type:* interface{}

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.awsInput"></a>

```go
func AwsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `CircleCiInput`<sup>Optional</sup> <a name="CircleCiInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.circleCiInput"></a>

```go
func CircleCiInput() interface{}
```

- *Type:* interface{}

---

##### `ClickupInput`<sup>Optional</sup> <a name="ClickupInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.clickupInput"></a>

```go
func ClickupInput() interface{}
```

- *Type:* interface{}

---

##### `CloudflareInput`<sup>Optional</sup> <a name="CloudflareInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.cloudflareInput"></a>

```go
func CloudflareInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigCatInput`<sup>Optional</sup> <a name="ConfigCatInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.configCatInput"></a>

```go
func ConfigCatInput() interface{}
```

- *Type:* interface{}

---

##### `DatadogInput`<sup>Optional</sup> <a name="DatadogInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.datadogInput"></a>

```go
func DatadogInput() interface{}
```

- *Type:* interface{}

---

##### `FastlyInput`<sup>Optional</sup> <a name="FastlyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.fastlyInput"></a>

```go
func FastlyInput() interface{}
```

- *Type:* interface{}

---

##### `FreshserviceInput`<sup>Optional</sup> <a name="FreshserviceInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.freshserviceInput"></a>

```go
func FreshserviceInput() interface{}
```

- *Type:* interface{}

---

##### `GcpInput`<sup>Optional</sup> <a name="GcpInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.gcpInput"></a>

```go
func GcpInput() interface{}
```

- *Type:* interface{}

---

##### `GeminiInput`<sup>Optional</sup> <a name="GeminiInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.geminiInput"></a>

```go
func GeminiInput() interface{}
```

- *Type:* interface{}

---

##### `GitlabInput`<sup>Optional</sup> <a name="GitlabInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.gitlabInput"></a>

```go
func GitlabInput() interface{}
```

- *Type:* interface{}

---

##### `GreyNoiseInput`<sup>Optional</sup> <a name="GreyNoiseInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.greyNoiseInput"></a>

```go
func GreyNoiseInput() interface{}
```

- *Type:* interface{}

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.httpInput"></a>

```go
func HttpInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchDarklyInput`<sup>Optional</sup> <a name="LaunchDarklyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.launchDarklyInput"></a>

```go
func LaunchDarklyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotionInput`<sup>Optional</sup> <a name="NotionInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.notionInput"></a>

```go
func NotionInput() interface{}
```

- *Type:* interface{}

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.oktaInput"></a>

```go
func OktaInput() interface{}
```

- *Type:* interface{}

---

##### `OpenaiInput`<sup>Optional</sup> <a name="OpenaiInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.openaiInput"></a>

```go
func OpenaiInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.splitInput"></a>

```go
func SplitInput() interface{}
```

- *Type:* interface{}

---

##### `StatsigInput`<sup>Optional</sup> <a name="StatsigInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.statsigInput"></a>

```go
func StatsigInput() interface{}
```

- *Type:* interface{}

---

##### `VirusTotalInput`<sup>Optional</sup> <a name="VirusTotalInput" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.virusTotalInput"></a>

```go
func VirusTotalInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.actionConnection.ActionConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionConnectionAnthropic <a name="ActionConnectionAnthropic" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAnthropic {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAnthropicApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey">ActionConnectionAnthropicApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic.property.apiKey"></a>

```go
ApiKey ActionConnectionAnthropicApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey">ActionConnectionAnthropicApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionAnthropicApiKey <a name="ActionConnectionAnthropicApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAnthropicApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | Anthropic API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Anthropic API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionAsana <a name="ActionConnectionAsana" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAsana {
	AccessToken: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAsanaAccessToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsana.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken">ActionConnectionAsanaAccessToken</a></code> | access_token block. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsana.property.accessToken"></a>

```go
AccessToken ActionConnectionAsanaAccessToken
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken">ActionConnectionAsanaAccessToken</a>

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#access_token ActionConnection#access_token}

---

### ActionConnectionAsanaAccessToken <a name="ActionConnectionAsanaAccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAsanaAccessToken {
	AccessToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken.property.accessToken">AccessToken</a></code> | <code>*string</code> | Asana access token. String length must be at least 1. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Asana access token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#access_token ActionConnection#access_token}

---

### ActionConnectionAws <a name="ActionConnectionAws" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAws {
	AssumeRole: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAwsAssumeRole,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAws.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a></code> | assume_role block. |

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAws.property.assumeRole"></a>

```go
AssumeRole ActionConnectionAwsAssumeRole
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#assume_role ActionConnection#assume_role}

---

### ActionConnectionAwsAssumeRole <a name="ActionConnectionAwsAssumeRole" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAwsAssumeRole {
	AccountId: *string,
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.accountId">AccountId</a></code> | <code>*string</code> | AWS account that the connection is created for. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.role">Role</a></code> | <code>*string</code> | Role to assume. String length must be at least 1. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

AWS account that the connection is created for. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#account_id ActionConnection#account_id}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.role"></a>

```go
Role *string
```

- *Type:* *string

Role to assume. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#role ActionConnection#role}

---

### ActionConnectionAzure <a name="ActionConnectionAzure" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAzure {
	Tenant: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAzureTenant,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzure.property.tenant">Tenant</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant">ActionConnectionAzureTenant</a></code> | tenant block. |

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzure.property.tenant"></a>

```go
Tenant ActionConnectionAzureTenant
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant">ActionConnectionAzureTenant</a>

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#tenant ActionConnection#tenant}

---

### ActionConnectionAzureTenant <a name="ActionConnectionAzureTenant" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionAzureTenant {
	AppClientId: *string,
	ClientSecret: *string,
	CustomScopes: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.appClientId">AppClientId</a></code> | <code>*string</code> | Azure application client ID. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Azure application client secret. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.customScopes">CustomScopes</a></code> | <code>*string</code> | Custom scope requested when acquiring an OAuth 2 access token. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.tenantId">TenantId</a></code> | <code>*string</code> | Azure Active Directory tenant ID. String length must be at least 1. |

---

##### `AppClientId`<sup>Optional</sup> <a name="AppClientId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.appClientId"></a>

```go
AppClientId *string
```

- *Type:* *string

Azure application client ID. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#app_client_id ActionConnection#app_client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Azure application client secret. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#client_secret ActionConnection#client_secret}

---

##### `CustomScopes`<sup>Optional</sup> <a name="CustomScopes" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.customScopes"></a>

```go
CustomScopes *string
```

- *Type:* *string

Custom scope requested when acquiring an OAuth 2 access token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#custom_scopes ActionConnection#custom_scopes}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Azure Active Directory tenant ID. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#tenant_id ActionConnection#tenant_id}

---

### ActionConnectionCircleCi <a name="ActionConnectionCircleCi" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionCircleCi {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionCircleCiApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey">ActionConnectionCircleCiApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi.property.apiKey"></a>

```go
ApiKey ActionConnectionCircleCiApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey">ActionConnectionCircleCiApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionCircleCiApiKey <a name="ActionConnectionCircleCiApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionCircleCiApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | CircleCI API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

CircleCI API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionClickup <a name="ActionConnectionClickup" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionClickup {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionClickupApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickup.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey">ActionConnectionClickupApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickup.property.apiKey"></a>

```go
ApiKey ActionConnectionClickupApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey">ActionConnectionClickupApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionClickupApiKey <a name="ActionConnectionClickupApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionClickupApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | ClickUp API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

ClickUp API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionCloudflare <a name="ActionConnectionCloudflare" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionCloudflare {
	ApiToken: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionCloudflareApiToken,
	GlobalApiToken: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionCloudflareGlobalApiToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare.property.apiToken">ApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken">ActionConnectionCloudflareApiToken</a></code> | api_token block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare.property.globalApiToken">GlobalApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken">ActionConnectionCloudflareGlobalApiToken</a></code> | global_api_token block. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare.property.apiToken"></a>

```go
ApiToken ActionConnectionCloudflareApiToken
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken">ActionConnectionCloudflareApiToken</a>

api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

##### `GlobalApiToken`<sup>Optional</sup> <a name="GlobalApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare.property.globalApiToken"></a>

```go
GlobalApiToken ActionConnectionCloudflareGlobalApiToken
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken">ActionConnectionCloudflareGlobalApiToken</a>

global_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#global_api_token ActionConnection#global_api_token}

---

### ActionConnectionCloudflareApiToken <a name="ActionConnectionCloudflareApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionCloudflareApiToken {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken.property.apiToken">ApiToken</a></code> | <code>*string</code> | Cloudflare API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Cloudflare API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionCloudflareGlobalApiToken <a name="ActionConnectionCloudflareGlobalApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionCloudflareGlobalApiToken {
	AuthEmail: *string,
	GlobalApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken.property.authEmail">AuthEmail</a></code> | <code>*string</code> | Email address associated with the Cloudflare account. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken.property.globalApiKey">GlobalApiKey</a></code> | <code>*string</code> | Cloudflare global API key. String length must be at least 1. |

---

##### `AuthEmail`<sup>Optional</sup> <a name="AuthEmail" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken.property.authEmail"></a>

```go
AuthEmail *string
```

- *Type:* *string

Email address associated with the Cloudflare account. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#auth_email ActionConnection#auth_email}

---

##### `GlobalApiKey`<sup>Optional</sup> <a name="GlobalApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken.property.globalApiKey"></a>

```go
GlobalApiKey *string
```

- *Type:* *string

Cloudflare global API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#global_api_key ActionConnection#global_api_key}

---

### ActionConnectionConfig <a name="ActionConnectionConfig" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Anthropic: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAnthropic,
	Asana: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAsana,
	Aws: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAws,
	Azure: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionAzure,
	CircleCi: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionCircleCi,
	Clickup: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionClickup,
	Cloudflare: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionCloudflare,
	ConfigCat: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionConfigCat,
	Datadog: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionDatadog,
	Fastly: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionFastly,
	Freshservice: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionFreshservice,
	Gcp: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGcp,
	Gemini: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGemini,
	Gitlab: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGitlab,
	GreyNoise: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGreyNoise,
	Http: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionHttp,
	LaunchDarkly: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionLaunchDarkly,
	Notion: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionNotion,
	Okta: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionOkta,
	Openai: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionOpenai,
	ServiceNow: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionServiceNow,
	Split: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionSplit,
	Statsig: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionStatsig,
	VirusTotal: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionVirusTotal,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the connection. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic">ActionConnectionAnthropic</a></code> | anthropic block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.asana">Asana</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsana">ActionConnectionAsana</a></code> | asana block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzure">ActionConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.circleCi">CircleCi</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi">ActionConnectionCircleCi</a></code> | circle_ci block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.clickup">Clickup</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickup">ActionConnectionClickup</a></code> | clickup block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.cloudflare">Cloudflare</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare">ActionConnectionCloudflare</a></code> | cloudflare block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.configCat">ConfigCat</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat">ActionConnectionConfigCat</a></code> | config_cat block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.datadog">Datadog</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog">ActionConnectionDatadog</a></code> | datadog block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.fastly">Fastly</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastly">ActionConnectionFastly</a></code> | fastly block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.freshservice">Freshservice</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice">ActionConnectionFreshservice</a></code> | freshservice block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcp">ActionConnectionGcp</a></code> | gcp block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.gemini">Gemini</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGemini">ActionConnectionGemini</a></code> | gemini block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab">ActionConnectionGitlab</a></code> | gitlab block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.greyNoise">GreyNoise</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise">ActionConnectionGreyNoise</a></code> | grey_noise block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.http">Http</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a></code> | http block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.launchDarkly">LaunchDarkly</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly">ActionConnectionLaunchDarkly</a></code> | launch_darkly block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.notion">Notion</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotion">ActionConnectionNotion</a></code> | notion block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.okta">Okta</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOkta">ActionConnectionOkta</a></code> | okta block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai">ActionConnectionOpenai</a></code> | openai block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow">ActionConnectionServiceNow</a></code> | service_now block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.split">Split</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplit">ActionConnectionSplit</a></code> | split block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.statsig">Statsig</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig">ActionConnectionStatsig</a></code> | statsig block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.virusTotal">VirusTotal</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal">ActionConnectionVirusTotal</a></code> | virus_total block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `Anthropic`<sup>Optional</sup> <a name="Anthropic" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.anthropic"></a>

```go
Anthropic ActionConnectionAnthropic
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropic">ActionConnectionAnthropic</a>

anthropic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#anthropic ActionConnection#anthropic}

---

##### `Asana`<sup>Optional</sup> <a name="Asana" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.asana"></a>

```go
Asana ActionConnectionAsana
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsana">ActionConnectionAsana</a>

asana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#asana ActionConnection#asana}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.aws"></a>

```go
Aws ActionConnectionAws
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#aws ActionConnection#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.azure"></a>

```go
Azure ActionConnectionAzure
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzure">ActionConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#azure ActionConnection#azure}

---

##### `CircleCi`<sup>Optional</sup> <a name="CircleCi" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.circleCi"></a>

```go
CircleCi ActionConnectionCircleCi
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCi">ActionConnectionCircleCi</a>

circle_ci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#circle_ci ActionConnection#circle_ci}

---

##### `Clickup`<sup>Optional</sup> <a name="Clickup" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.clickup"></a>

```go
Clickup ActionConnectionClickup
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickup">ActionConnectionClickup</a>

clickup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#clickup ActionConnection#clickup}

---

##### `Cloudflare`<sup>Optional</sup> <a name="Cloudflare" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.cloudflare"></a>

```go
Cloudflare ActionConnectionCloudflare
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflare">ActionConnectionCloudflare</a>

cloudflare block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#cloudflare ActionConnection#cloudflare}

---

##### `ConfigCat`<sup>Optional</sup> <a name="ConfigCat" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.configCat"></a>

```go
ConfigCat ActionConnectionConfigCat
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat">ActionConnectionConfigCat</a>

config_cat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#config_cat ActionConnection#config_cat}

---

##### `Datadog`<sup>Optional</sup> <a name="Datadog" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.datadog"></a>

```go
Datadog ActionConnectionDatadog
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog">ActionConnectionDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#datadog ActionConnection#datadog}

---

##### `Fastly`<sup>Optional</sup> <a name="Fastly" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.fastly"></a>

```go
Fastly ActionConnectionFastly
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastly">ActionConnectionFastly</a>

fastly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#fastly ActionConnection#fastly}

---

##### `Freshservice`<sup>Optional</sup> <a name="Freshservice" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.freshservice"></a>

```go
Freshservice ActionConnectionFreshservice
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice">ActionConnectionFreshservice</a>

freshservice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#freshservice ActionConnection#freshservice}

---

##### `Gcp`<sup>Optional</sup> <a name="Gcp" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.gcp"></a>

```go
Gcp ActionConnectionGcp
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcp">ActionConnectionGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#gcp ActionConnection#gcp}

---

##### `Gemini`<sup>Optional</sup> <a name="Gemini" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.gemini"></a>

```go
Gemini ActionConnectionGemini
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGemini">ActionConnectionGemini</a>

gemini block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#gemini ActionConnection#gemini}

---

##### `Gitlab`<sup>Optional</sup> <a name="Gitlab" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.gitlab"></a>

```go
Gitlab ActionConnectionGitlab
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab">ActionConnectionGitlab</a>

gitlab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#gitlab ActionConnection#gitlab}

---

##### `GreyNoise`<sup>Optional</sup> <a name="GreyNoise" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.greyNoise"></a>

```go
GreyNoise ActionConnectionGreyNoise
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise">ActionConnectionGreyNoise</a>

grey_noise block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#grey_noise ActionConnection#grey_noise}

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.http"></a>

```go
Http ActionConnectionHttp
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#http ActionConnection#http}

---

##### `LaunchDarkly`<sup>Optional</sup> <a name="LaunchDarkly" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.launchDarkly"></a>

```go
LaunchDarkly ActionConnectionLaunchDarkly
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly">ActionConnectionLaunchDarkly</a>

launch_darkly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#launch_darkly ActionConnection#launch_darkly}

---

##### `Notion`<sup>Optional</sup> <a name="Notion" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.notion"></a>

```go
Notion ActionConnectionNotion
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotion">ActionConnectionNotion</a>

notion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#notion ActionConnection#notion}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.okta"></a>

```go
Okta ActionConnectionOkta
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOkta">ActionConnectionOkta</a>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#okta ActionConnection#okta}

---

##### `Openai`<sup>Optional</sup> <a name="Openai" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.openai"></a>

```go
Openai ActionConnectionOpenai
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai">ActionConnectionOpenai</a>

openai block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#openai ActionConnection#openai}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.serviceNow"></a>

```go
ServiceNow ActionConnectionServiceNow
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow">ActionConnectionServiceNow</a>

service_now block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#service_now ActionConnection#service_now}

---

##### `Split`<sup>Optional</sup> <a name="Split" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.split"></a>

```go
Split ActionConnectionSplit
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplit">ActionConnectionSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#split ActionConnection#split}

---

##### `Statsig`<sup>Optional</sup> <a name="Statsig" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.statsig"></a>

```go
Statsig ActionConnectionStatsig
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig">ActionConnectionStatsig</a>

statsig block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#statsig ActionConnection#statsig}

---

##### `VirusTotal`<sup>Optional</sup> <a name="VirusTotal" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfig.property.virusTotal"></a>

```go
VirusTotal ActionConnectionVirusTotal
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal">ActionConnectionVirusTotal</a>

virus_total block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#virus_total ActionConnection#virus_total}

---

### ActionConnectionConfigCat <a name="ActionConnectionConfigCat" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionConfigCat {
	SdkKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionConfigCatSdkKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat.property.sdkKey">SdkKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey">ActionConnectionConfigCatSdkKey</a></code> | sdk_key block. |

---

##### `SdkKey`<sup>Optional</sup> <a name="SdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCat.property.sdkKey"></a>

```go
SdkKey ActionConnectionConfigCatSdkKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey">ActionConnectionConfigCatSdkKey</a>

sdk_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#sdk_key ActionConnection#sdk_key}

---

### ActionConnectionConfigCatSdkKey <a name="ActionConnectionConfigCatSdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionConfigCatSdkKey {
	ApiPassword: *string,
	ApiUsername: *string,
	SdkKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.property.apiPassword">ApiPassword</a></code> | <code>*string</code> | ConfigCat Public Management API password. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.property.apiUsername">ApiUsername</a></code> | <code>*string</code> | ConfigCat Public Management API username. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.property.sdkKey">SdkKey</a></code> | <code>*string</code> | ConfigCat SDK key. String length must be at least 1. |

---

##### `ApiPassword`<sup>Optional</sup> <a name="ApiPassword" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.property.apiPassword"></a>

```go
ApiPassword *string
```

- *Type:* *string

ConfigCat Public Management API password. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_password ActionConnection#api_password}

---

##### `ApiUsername`<sup>Optional</sup> <a name="ApiUsername" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.property.apiUsername"></a>

```go
ApiUsername *string
```

- *Type:* *string

ConfigCat Public Management API username. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_username ActionConnection#api_username}

---

##### `SdkKey`<sup>Optional</sup> <a name="SdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey.property.sdkKey"></a>

```go
SdkKey *string
```

- *Type:* *string

ConfigCat SDK key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#sdk_key ActionConnection#sdk_key}

---

### ActionConnectionDatadog <a name="ActionConnectionDatadog" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionDatadog {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionDatadogApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey">ActionConnectionDatadogApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadog.property.apiKey"></a>

```go
ApiKey ActionConnectionDatadogApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey">ActionConnectionDatadogApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionDatadogApiKey <a name="ActionConnectionDatadogApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionDatadogApiKey {
	ApiKey: *string,
	AppKey: *string,
	Datacenter: *string,
	Subdomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Datadog API key. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.appKey">AppKey</a></code> | <code>*string</code> | Datadog application key. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.datacenter">Datacenter</a></code> | <code>*string</code> | Datadog site data center. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.subdomain">Subdomain</a></code> | <code>*string</code> | Custom subdomain used for URLs generated with this connection. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Datadog API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.appKey"></a>

```go
AppKey *string
```

- *Type:* *string

Datadog application key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#app_key ActionConnection#app_key}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Datadog site data center. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#datacenter ActionConnection#datacenter}

---

##### `Subdomain`<sup>Optional</sup> <a name="Subdomain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey.property.subdomain"></a>

```go
Subdomain *string
```

- *Type:* *string

Custom subdomain used for URLs generated with this connection. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#subdomain ActionConnection#subdomain}

---

### ActionConnectionFastly <a name="ActionConnectionFastly" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionFastly {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionFastlyApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastly.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey">ActionConnectionFastlyApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastly.property.apiKey"></a>

```go
ApiKey ActionConnectionFastlyApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey">ActionConnectionFastlyApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionFastlyApiKey <a name="ActionConnectionFastlyApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionFastlyApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Fastly API key. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Fastly API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionFreshservice <a name="ActionConnectionFreshservice" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionFreshservice {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionFreshserviceApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey">ActionConnectionFreshserviceApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshservice.property.apiKey"></a>

```go
ApiKey ActionConnectionFreshserviceApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey">ActionConnectionFreshserviceApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionFreshserviceApiKey <a name="ActionConnectionFreshserviceApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionFreshserviceApiKey {
	ApiKey: *string,
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Freshservice API key. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey.property.domain">Domain</a></code> | <code>*string</code> | Freshservice domain. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Freshservice API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Freshservice domain. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#domain ActionConnection#domain}

---

### ActionConnectionGcp <a name="ActionConnectionGcp" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGcp {
	ServiceAccount: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGcpServiceAccount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcp.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount">ActionConnectionGcpServiceAccount</a></code> | service_account block. |

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcp.property.serviceAccount"></a>

```go
ServiceAccount ActionConnectionGcpServiceAccount
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount">ActionConnectionGcpServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#service_account ActionConnection#service_account}

---

### ActionConnectionGcpServiceAccount <a name="ActionConnectionGcpServiceAccount" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGcpServiceAccount {
	PrivateKey: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Google Cloud service account private key. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Google Cloud service account email. String length must be at least 1. |

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Google Cloud service account private key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#private_key ActionConnection#private_key}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Google Cloud service account email. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#service_account_email ActionConnection#service_account_email}

---

### ActionConnectionGemini <a name="ActionConnectionGemini" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGemini"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGemini.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGemini {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGeminiApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGemini.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey">ActionConnectionGeminiApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGemini.property.apiKey"></a>

```go
ApiKey ActionConnectionGeminiApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey">ActionConnectionGeminiApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionGeminiApiKey <a name="ActionConnectionGeminiApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGeminiApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Gemini API key. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Gemini API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionGitlab <a name="ActionConnectionGitlab" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGitlab {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGitlabApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey">ActionConnectionGitlabApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlab.property.apiKey"></a>

```go
ApiKey ActionConnectionGitlabApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey">ActionConnectionGitlabApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionGitlabApiKey <a name="ActionConnectionGitlabApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGitlabApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | GitLab API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

GitLab API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionGreyNoise <a name="ActionConnectionGreyNoise" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGreyNoise {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionGreyNoiseApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey">ActionConnectionGreyNoiseApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoise.property.apiKey"></a>

```go
ApiKey ActionConnectionGreyNoiseApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey">ActionConnectionGreyNoiseApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionGreyNoiseApiKey <a name="ActionConnectionGreyNoiseApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionGreyNoiseApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | GreyNoise API key. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

GreyNoise API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionHttp <a name="ActionConnectionHttp" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionHttp {
	BaseUrl: *string,
	TokenAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionHttpTokenAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttp.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Base HTTP url for the integration. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttp.property.tokenAuth">TokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | token_auth block. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttp.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Base HTTP url for the integration. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#base_url ActionConnection#base_url}

---

##### `TokenAuth`<sup>Optional</sup> <a name="TokenAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttp.property.tokenAuth"></a>

```go
TokenAuth ActionConnectionHttpTokenAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#token_auth ActionConnection#token_auth}

---

### ActionConnectionHttpTokenAuth <a name="ActionConnectionHttpTokenAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionHttpTokenAuth {
	Body: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionHttpTokenAuthBody,
	Header: interface{},
	Token: interface{},
	UrlParameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.body">Body</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | body block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.token">Token</a></code> | <code>interface{}</code> | token block. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.urlParameter">UrlParameter</a></code> | <code>interface{}</code> | url_parameter block. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.body"></a>

```go
Body ActionConnectionHttpTokenAuthBody
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#body ActionConnection#body}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#header ActionConnection#header}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.token"></a>

```go
Token interface{}
```

- *Type:* interface{}

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#token ActionConnection#token}

---

##### `UrlParameter`<sup>Optional</sup> <a name="UrlParameter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.urlParameter"></a>

```go
UrlParameter interface{}
```

- *Type:* interface{}

url_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#url_parameter ActionConnection#url_parameter}

---

### ActionConnectionHttpTokenAuthBody <a name="ActionConnectionHttpTokenAuthBody" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionHttpTokenAuthBody {
	Content: *string,
	ContentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.content">Content</a></code> | <code>*string</code> | Serialized body content. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.contentType">ContentType</a></code> | <code>*string</code> | Content type of the body. String length must be at least 1. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.content"></a>

```go
Content *string
```

- *Type:* *string

Serialized body content. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#content ActionConnection#content}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Content type of the body. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#content_type ActionConnection#content_type}

---

### ActionConnectionHttpTokenAuthHeader <a name="ActionConnectionHttpTokenAuthHeader" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionHttpTokenAuthHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.name">Name</a></code> | <code>*string</code> | Header name. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.value">Value</a></code> | <code>*string</code> | String length must be at least 1. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Header name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionHttpTokenAuthToken <a name="ActionConnectionHttpTokenAuthToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionHttpTokenAuthToken {
	Name: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.name">Name</a></code> | <code>*string</code> | Token name. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.type">Type</a></code> | <code>*string</code> | Token type Valid values are `SECRET`. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.value">Value</a></code> | <code>*string</code> | Token value. String length must be at least 1. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.name"></a>

```go
Name *string
```

- *Type:* *string

Token name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.type"></a>

```go
Type *string
```

- *Type:* *string

Token type Valid values are `SECRET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#type ActionConnection#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.value"></a>

```go
Value *string
```

- *Type:* *string

Token value. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionHttpTokenAuthUrlParameter <a name="ActionConnectionHttpTokenAuthUrlParameter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionHttpTokenAuthUrlParameter {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.name">Name</a></code> | <code>*string</code> | URL parameter name. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.value">Value</a></code> | <code>*string</code> | URL parameter value. String length must be at least 1. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

URL parameter name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

URL parameter value. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionLaunchDarkly <a name="ActionConnectionLaunchDarkly" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionLaunchDarkly {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionLaunchDarklyApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey">ActionConnectionLaunchDarklyApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarkly.property.apiKey"></a>

```go
ApiKey ActionConnectionLaunchDarklyApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey">ActionConnectionLaunchDarklyApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionLaunchDarklyApiKey <a name="ActionConnectionLaunchDarklyApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionLaunchDarklyApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | LaunchDarkly API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

LaunchDarkly API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionNotion <a name="ActionConnectionNotion" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionNotion {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionNotionApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotion.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey">ActionConnectionNotionApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotion.property.apiKey"></a>

```go
ApiKey ActionConnectionNotionApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey">ActionConnectionNotionApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionNotionApiKey <a name="ActionConnectionNotionApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionNotionApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | Notion API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Notion API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionOkta <a name="ActionConnectionOkta" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOkta"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOkta.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionOkta {
	ApiToken: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionOktaApiToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOkta.property.apiToken">ApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken">ActionConnectionOktaApiToken</a></code> | api_token block. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOkta.property.apiToken"></a>

```go
ApiToken ActionConnectionOktaApiToken
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken">ActionConnectionOktaApiToken</a>

api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionOktaApiToken <a name="ActionConnectionOktaApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionOktaApiToken {
	ApiToken: *string,
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken.property.apiToken">ApiToken</a></code> | <code>*string</code> | Okta API token. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken.property.domain">Domain</a></code> | <code>*string</code> | Okta domain. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Okta API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Okta domain. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#domain ActionConnection#domain}

---

### ActionConnectionOpenai <a name="ActionConnectionOpenai" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionOpenai {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionOpenaiApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey">ActionConnectionOpenaiApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenai.property.apiKey"></a>

```go
ApiKey ActionConnectionOpenaiApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey">ActionConnectionOpenaiApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionOpenaiApiKey <a name="ActionConnectionOpenaiApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionOpenaiApiKey {
	ApiToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey.property.apiToken">ApiToken</a></code> | <code>*string</code> | OpenAI API token. String length must be at least 1. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

OpenAI API token. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_token ActionConnection#api_token}

---

### ActionConnectionServiceNow <a name="ActionConnectionServiceNow" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionServiceNow {
	BasicAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionServiceNowBasicAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth">ActionConnectionServiceNowBasicAuth</a></code> | basic_auth block. |

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNow.property.basicAuth"></a>

```go
BasicAuth ActionConnectionServiceNowBasicAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth">ActionConnectionServiceNowBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#basic_auth ActionConnection#basic_auth}

---

### ActionConnectionServiceNowBasicAuth <a name="ActionConnectionServiceNowBasicAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionServiceNowBasicAuth {
	Instance: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.property.instance">Instance</a></code> | <code>*string</code> | ServiceNow instance. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.property.password">Password</a></code> | <code>*string</code> | ServiceNow password. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.property.username">Username</a></code> | <code>*string</code> | ServiceNow username. String length must be at least 1. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

ServiceNow instance. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#instance ActionConnection#instance}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.property.password"></a>

```go
Password *string
```

- *Type:* *string

ServiceNow password. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#password ActionConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

ServiceNow username. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#username ActionConnection#username}

---

### ActionConnectionSplit <a name="ActionConnectionSplit" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionSplit {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionSplitApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplit.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey">ActionConnectionSplitApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplit.property.apiKey"></a>

```go
ApiKey ActionConnectionSplitApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey">ActionConnectionSplitApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionSplitApiKey <a name="ActionConnectionSplitApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionSplitApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Split API key. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Split API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionStatsig <a name="ActionConnectionStatsig" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionStatsig {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionStatsigApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey">ActionConnectionStatsigApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsig.property.apiKey"></a>

```go
ApiKey ActionConnectionStatsigApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey">ActionConnectionStatsigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionStatsigApiKey <a name="ActionConnectionStatsigApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionStatsigApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | Statsig API key. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Statsig API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionVirusTotal <a name="ActionConnectionVirusTotal" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionVirusTotal {
	ApiKey: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionConnection.ActionConnectionVirusTotalApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey">ActionConnectionVirusTotalApiKey</a></code> | api_key block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotal.property.apiKey"></a>

```go
ApiKey ActionConnectionVirusTotalApiKey
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey">ActionConnectionVirusTotalApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

### ActionConnectionVirusTotalApiKey <a name="ActionConnectionVirusTotalApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

&actionconnection.ActionConnectionVirusTotalApiKey {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | VirusTotal API key. String length must be at least 1. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

VirusTotal API key. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/action_connection#api_key ActionConnection#api_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionConnectionAnthropicApiKeyOutputReference <a name="ActionConnectionAnthropicApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAnthropicApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAnthropicApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAnthropicOutputReference <a name="ActionConnectionAnthropicOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAnthropicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAnthropicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionAnthropicApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKey">ActionConnectionAnthropicApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference">ActionConnectionAnthropicApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionAnthropicApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicApiKeyOutputReference">ActionConnectionAnthropicApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAnthropicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAsanaAccessTokenOutputReference <a name="ActionConnectionAsanaAccessTokenOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAsanaAccessTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAsanaAccessTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAsanaOutputReference <a name="ActionConnectionAsanaOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAsanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAsanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.putAccessToken">PutAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessToken` <a name="PutAccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.putAccessToken"></a>

```go
func PutAccessToken(value ActionConnectionAsanaAccessToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.putAccessToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessToken">ActionConnectionAsanaAccessToken</a>

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference">ActionConnectionAsanaAccessTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.accessToken"></a>

```go
func AccessToken() ActionConnectionAsanaAccessTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaAccessTokenOutputReference">ActionConnectionAsanaAccessTokenOutputReference</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAsanaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAwsAssumeRoleOutputReference <a name="ActionConnectionAwsAssumeRoleOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAwsAssumeRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAwsAssumeRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAwsOutputReference <a name="ActionConnectionAwsOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole">PutAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssumeRole` <a name="PutAssumeRole" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole"></a>

```go
func PutAssumeRole(value ActionConnectionAwsAssumeRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a>

---

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resetAssumeRole"></a>

```go
func ResetAssumeRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference">ActionConnectionAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRole"></a>

```go
func AssumeRole() ActionConnectionAwsAssumeRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference">ActionConnectionAwsAssumeRoleOutputReference</a>

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRoleInput"></a>

```go
func AssumeRoleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAzureOutputReference <a name="ActionConnectionAzureOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.putTenant">PutTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.resetTenant">ResetTenant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTenant` <a name="PutTenant" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.putTenant"></a>

```go
func PutTenant(value ActionConnectionAzureTenant)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.putTenant.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenant">ActionConnectionAzureTenant</a>

---

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.resetTenant"></a>

```go
func ResetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.tenant">Tenant</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference">ActionConnectionAzureTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.tenantInput">TenantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.tenant"></a>

```go
func Tenant() ActionConnectionAzureTenantOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference">ActionConnectionAzureTenantOutputReference</a>

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.tenantInput"></a>

```go
func TenantInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionAzureTenantOutputReference <a name="ActionConnectionAzureTenantOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionAzureTenantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionAzureTenantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetAppClientId">ResetAppClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetCustomScopes">ResetCustomScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppClientId` <a name="ResetAppClientId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetAppClientId"></a>

```go
func ResetAppClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetCustomScopes` <a name="ResetCustomScopes" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetCustomScopes"></a>

```go
func ResetCustomScopes()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.appClientIdInput">AppClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.customScopesInput">CustomScopesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.appClientId">AppClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.customScopes">CustomScopes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppClientIdInput`<sup>Optional</sup> <a name="AppClientIdInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.appClientIdInput"></a>

```go
func AppClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `CustomScopesInput`<sup>Optional</sup> <a name="CustomScopesInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.customScopesInput"></a>

```go
func CustomScopesInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AppClientId`<sup>Required</sup> <a name="AppClientId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.appClientId"></a>

```go
func AppClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CustomScopes`<sup>Required</sup> <a name="CustomScopes" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.customScopes"></a>

```go
func CustomScopes() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionAzureTenantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionCircleCiApiKeyOutputReference <a name="ActionConnectionCircleCiApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionCircleCiApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionCircleCiApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionCircleCiOutputReference <a name="ActionConnectionCircleCiOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionCircleCiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionCircleCiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionCircleCiApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKey">ActionConnectionCircleCiApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference">ActionConnectionCircleCiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionCircleCiApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiApiKeyOutputReference">ActionConnectionCircleCiApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCircleCiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionClickupApiKeyOutputReference <a name="ActionConnectionClickupApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionClickupApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionClickupApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionClickupOutputReference <a name="ActionConnectionClickupOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionClickupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionClickupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionClickupApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKey">ActionConnectionClickupApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference">ActionConnectionClickupApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionClickupApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionClickupApiKeyOutputReference">ActionConnectionClickupApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionClickupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionCloudflareApiTokenOutputReference <a name="ActionConnectionCloudflareApiTokenOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionCloudflareApiTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionCloudflareApiTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionCloudflareGlobalApiTokenOutputReference <a name="ActionConnectionCloudflareGlobalApiTokenOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionCloudflareGlobalApiTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionCloudflareGlobalApiTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resetAuthEmail">ResetAuthEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resetGlobalApiKey">ResetGlobalApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthEmail` <a name="ResetAuthEmail" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resetAuthEmail"></a>

```go
func ResetAuthEmail()
```

##### `ResetGlobalApiKey` <a name="ResetGlobalApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.resetGlobalApiKey"></a>

```go
func ResetGlobalApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmailInput">AuthEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKeyInput">GlobalApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmail">AuthEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKey">GlobalApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthEmailInput`<sup>Optional</sup> <a name="AuthEmailInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmailInput"></a>

```go
func AuthEmailInput() *string
```

- *Type:* *string

---

##### `GlobalApiKeyInput`<sup>Optional</sup> <a name="GlobalApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKeyInput"></a>

```go
func GlobalApiKeyInput() *string
```

- *Type:* *string

---

##### `AuthEmail`<sup>Required</sup> <a name="AuthEmail" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmail"></a>

```go
func AuthEmail() *string
```

- *Type:* *string

---

##### `GlobalApiKey`<sup>Required</sup> <a name="GlobalApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKey"></a>

```go
func GlobalApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionCloudflareOutputReference <a name="ActionConnectionCloudflareOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionCloudflareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionCloudflareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.putApiToken">PutApiToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.putGlobalApiToken">PutGlobalApiToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resetGlobalApiToken">ResetGlobalApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiToken` <a name="PutApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.putApiToken"></a>

```go
func PutApiToken(value ActionConnectionCloudflareApiToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.putApiToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiToken">ActionConnectionCloudflareApiToken</a>

---

##### `PutGlobalApiToken` <a name="PutGlobalApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.putGlobalApiToken"></a>

```go
func PutGlobalApiToken(value ActionConnectionCloudflareGlobalApiToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.putGlobalApiToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiToken">ActionConnectionCloudflareGlobalApiToken</a>

---

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetGlobalApiToken` <a name="ResetGlobalApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.resetGlobalApiToken"></a>

```go
func ResetGlobalApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.apiToken">ApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference">ActionConnectionCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.globalApiToken">GlobalApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference">ActionConnectionCloudflareGlobalApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.globalApiTokenInput">GlobalApiTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.apiToken"></a>

```go
func ApiToken() ActionConnectionCloudflareApiTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareApiTokenOutputReference">ActionConnectionCloudflareApiTokenOutputReference</a>

---

##### `GlobalApiToken`<sup>Required</sup> <a name="GlobalApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.globalApiToken"></a>

```go
func GlobalApiToken() ActionConnectionCloudflareGlobalApiTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareGlobalApiTokenOutputReference">ActionConnectionCloudflareGlobalApiTokenOutputReference</a>

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalApiTokenInput`<sup>Optional</sup> <a name="GlobalApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.globalApiTokenInput"></a>

```go
func GlobalApiTokenInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionCloudflareOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionConfigCatOutputReference <a name="ActionConnectionConfigCatOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionConfigCatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionConfigCatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.putSdkKey">PutSdkKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.resetSdkKey">ResetSdkKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSdkKey` <a name="PutSdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.putSdkKey"></a>

```go
func PutSdkKey(value ActionConnectionConfigCatSdkKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.putSdkKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKey">ActionConnectionConfigCatSdkKey</a>

---

##### `ResetSdkKey` <a name="ResetSdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.resetSdkKey"></a>

```go
func ResetSdkKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.sdkKey">SdkKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference">ActionConnectionConfigCatSdkKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.sdkKeyInput">SdkKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SdkKey`<sup>Required</sup> <a name="SdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.sdkKey"></a>

```go
func SdkKey() ActionConnectionConfigCatSdkKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference">ActionConnectionConfigCatSdkKeyOutputReference</a>

---

##### `SdkKeyInput`<sup>Optional</sup> <a name="SdkKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.sdkKeyInput"></a>

```go
func SdkKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionConfigCatSdkKeyOutputReference <a name="ActionConnectionConfigCatSdkKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionConfigCatSdkKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionConfigCatSdkKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resetApiPassword">ResetApiPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resetApiUsername">ResetApiUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resetSdkKey">ResetSdkKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiPassword` <a name="ResetApiPassword" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resetApiPassword"></a>

```go
func ResetApiPassword()
```

##### `ResetApiUsername` <a name="ResetApiUsername" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resetApiUsername"></a>

```go
func ResetApiUsername()
```

##### `ResetSdkKey` <a name="ResetSdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.resetSdkKey"></a>

```go
func ResetSdkKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiPasswordInput">ApiPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiUsernameInput">ApiUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.sdkKeyInput">SdkKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiPassword">ApiPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiUsername">ApiUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.sdkKey">SdkKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiPasswordInput`<sup>Optional</sup> <a name="ApiPasswordInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiPasswordInput"></a>

```go
func ApiPasswordInput() *string
```

- *Type:* *string

---

##### `ApiUsernameInput`<sup>Optional</sup> <a name="ApiUsernameInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiUsernameInput"></a>

```go
func ApiUsernameInput() *string
```

- *Type:* *string

---

##### `SdkKeyInput`<sup>Optional</sup> <a name="SdkKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.sdkKeyInput"></a>

```go
func SdkKeyInput() *string
```

- *Type:* *string

---

##### `ApiPassword`<sup>Required</sup> <a name="ApiPassword" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiPassword"></a>

```go
func ApiPassword() *string
```

- *Type:* *string

---

##### `ApiUsername`<sup>Required</sup> <a name="ApiUsername" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.apiUsername"></a>

```go
func ApiUsername() *string
```

- *Type:* *string

---

##### `SdkKey`<sup>Required</sup> <a name="SdkKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.sdkKey"></a>

```go
func SdkKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionConfigCatSdkKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionDatadogApiKeyOutputReference <a name="ActionConnectionDatadogApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionDatadogApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionDatadogApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetAppKey">ResetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetSubdomain">ResetSubdomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetAppKey"></a>

```go
func ResetAppKey()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetSubdomain` <a name="ResetSubdomain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.resetSubdomain"></a>

```go
func ResetSubdomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.subdomainInput">SubdomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.appKeyInput"></a>

```go
func AppKeyInput() *string
```

- *Type:* *string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `SubdomainInput`<sup>Optional</sup> <a name="SubdomainInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.subdomainInput"></a>

```go
func SubdomainInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionDatadogOutputReference <a name="ActionConnectionDatadogOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionDatadogApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKey">ActionConnectionDatadogApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference">ActionConnectionDatadogApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionDatadogApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogApiKeyOutputReference">ActionConnectionDatadogApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionFastlyApiKeyOutputReference <a name="ActionConnectionFastlyApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionFastlyApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionFastlyApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionFastlyOutputReference <a name="ActionConnectionFastlyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionFastlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionFastlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionFastlyApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKey">ActionConnectionFastlyApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference">ActionConnectionFastlyApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionFastlyApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyApiKeyOutputReference">ActionConnectionFastlyApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFastlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionFreshserviceApiKeyOutputReference <a name="ActionConnectionFreshserviceApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionFreshserviceApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionFreshserviceApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.resetDomain"></a>

```go
func ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionFreshserviceOutputReference <a name="ActionConnectionFreshserviceOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionFreshserviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionFreshserviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionFreshserviceApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKey">ActionConnectionFreshserviceApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference">ActionConnectionFreshserviceApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionFreshserviceApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceApiKeyOutputReference">ActionConnectionFreshserviceApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionFreshserviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGcpOutputReference <a name="ActionConnectionGcpOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.putServiceAccount"></a>

```go
func PutServiceAccount(value ActionConnectionGcpServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccount">ActionConnectionGcpServiceAccount</a>

---

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference">ActionConnectionGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() ActionConnectionGcpServiceAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference">ActionConnectionGcpServiceAccountOutputReference</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGcpServiceAccountOutputReference <a name="ActionConnectionGcpServiceAccountOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGcpServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGcpServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGcpServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGeminiApiKeyOutputReference <a name="ActionConnectionGeminiApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGeminiApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGeminiApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGeminiOutputReference <a name="ActionConnectionGeminiOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGeminiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGeminiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionGeminiApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKey">ActionConnectionGeminiApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference">ActionConnectionGeminiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionGeminiApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiApiKeyOutputReference">ActionConnectionGeminiApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGeminiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGitlabApiKeyOutputReference <a name="ActionConnectionGitlabApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGitlabApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGitlabApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGitlabOutputReference <a name="ActionConnectionGitlabOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGitlabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGitlabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionGitlabApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKey">ActionConnectionGitlabApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference">ActionConnectionGitlabApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionGitlabApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabApiKeyOutputReference">ActionConnectionGitlabApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGitlabOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGreyNoiseApiKeyOutputReference <a name="ActionConnectionGreyNoiseApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGreyNoiseApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGreyNoiseApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionGreyNoiseOutputReference <a name="ActionConnectionGreyNoiseOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionGreyNoiseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionGreyNoiseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionGreyNoiseApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKey">ActionConnectionGreyNoiseApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference">ActionConnectionGreyNoiseApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionGreyNoiseApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseApiKeyOutputReference">ActionConnectionGreyNoiseApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionGreyNoiseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpOutputReference <a name="ActionConnectionHttpOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth">PutTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetTokenAuth">ResetTokenAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTokenAuth` <a name="PutTokenAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth"></a>

```go
func PutTokenAuth(value ActionConnectionHttpTokenAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetTokenAuth` <a name="ResetTokenAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetTokenAuth"></a>

```go
func ResetTokenAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuth">TokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference">ActionConnectionHttpTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuthInput">TokenAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TokenAuth`<sup>Required</sup> <a name="TokenAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuth"></a>

```go
func TokenAuth() ActionConnectionHttpTokenAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference">ActionConnectionHttpTokenAuthOutputReference</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `TokenAuthInput`<sup>Optional</sup> <a name="TokenAuthInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuthInput"></a>

```go
func TokenAuthInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthBodyOutputReference <a name="ActionConnectionHttpTokenAuthBodyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionHttpTokenAuthBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContentType"></a>

```go
func ResetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthHeaderList <a name="ActionConnectionHttpTokenAuthHeaderList" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionConnectionHttpTokenAuthHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get"></a>

```go
func Get(index *f64) ActionConnectionHttpTokenAuthHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthHeaderOutputReference <a name="ActionConnectionHttpTokenAuthHeaderOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionConnectionHttpTokenAuthHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthOutputReference <a name="ActionConnectionHttpTokenAuthOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionHttpTokenAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken">PutToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter">PutUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetUrlParameter">ResetUrlParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody"></a>

```go
func PutBody(value ActionConnectionHttpTokenAuthBody)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutToken` <a name="PutToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken"></a>

```go
func PutToken(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlParameter` <a name="PutUrlParameter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter"></a>

```go
func PutUrlParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUrlParameter` <a name="ResetUrlParameter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetUrlParameter"></a>

```go
func ResetUrlParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference">ActionConnectionHttpTokenAuthBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList">ActionConnectionHttpTokenAuthHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.token">Token</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList">ActionConnectionHttpTokenAuthTokenList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameter">UrlParameter</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList">ActionConnectionHttpTokenAuthUrlParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.tokenInput">TokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput">UrlParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.body"></a>

```go
func Body() ActionConnectionHttpTokenAuthBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference">ActionConnectionHttpTokenAuthBodyOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.header"></a>

```go
func Header() ActionConnectionHttpTokenAuthHeaderList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList">ActionConnectionHttpTokenAuthHeaderList</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.token"></a>

```go
func Token() ActionConnectionHttpTokenAuthTokenList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList">ActionConnectionHttpTokenAuthTokenList</a>

---

##### `UrlParameter`<sup>Required</sup> <a name="UrlParameter" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameter"></a>

```go
func UrlParameter() ActionConnectionHttpTokenAuthUrlParameterList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList">ActionConnectionHttpTokenAuthUrlParameterList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.tokenInput"></a>

```go
func TokenInput() interface{}
```

- *Type:* interface{}

---

##### `UrlParameterInput`<sup>Optional</sup> <a name="UrlParameterInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput"></a>

```go
func UrlParameterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthTokenList <a name="ActionConnectionHttpTokenAuthTokenList" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthTokenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionConnectionHttpTokenAuthTokenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get"></a>

```go
func Get(index *f64) ActionConnectionHttpTokenAuthTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthTokenOutputReference <a name="ActionConnectionHttpTokenAuthTokenOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionConnectionHttpTokenAuthTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthUrlParameterList <a name="ActionConnectionHttpTokenAuthUrlParameterList" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthUrlParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionConnectionHttpTokenAuthUrlParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get"></a>

```go
func Get(index *f64) ActionConnectionHttpTokenAuthUrlParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionHttpTokenAuthUrlParameterOutputReference <a name="ActionConnectionHttpTokenAuthUrlParameterOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionHttpTokenAuthUrlParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionConnectionHttpTokenAuthUrlParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionLaunchDarklyApiKeyOutputReference <a name="ActionConnectionLaunchDarklyApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionLaunchDarklyApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionLaunchDarklyApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionLaunchDarklyOutputReference <a name="ActionConnectionLaunchDarklyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionLaunchDarklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionLaunchDarklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionLaunchDarklyApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKey">ActionConnectionLaunchDarklyApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference">ActionConnectionLaunchDarklyApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionLaunchDarklyApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyApiKeyOutputReference">ActionConnectionLaunchDarklyApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionLaunchDarklyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionNotionApiKeyOutputReference <a name="ActionConnectionNotionApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionNotionApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionNotionApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionNotionOutputReference <a name="ActionConnectionNotionOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionNotionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionNotionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionNotionApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKey">ActionConnectionNotionApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference">ActionConnectionNotionApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionNotionApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionNotionApiKeyOutputReference">ActionConnectionNotionApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionNotionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionOktaApiTokenOutputReference <a name="ActionConnectionOktaApiTokenOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionOktaApiTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionOktaApiTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.resetDomain"></a>

```go
func ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionOktaOutputReference <a name="ActionConnectionOktaOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionOktaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionOktaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.putApiToken">PutApiToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiToken` <a name="PutApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.putApiToken"></a>

```go
func PutApiToken(value ActionConnectionOktaApiToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.putApiToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiToken">ActionConnectionOktaApiToken</a>

---

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.apiToken">ApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference">ActionConnectionOktaApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.apiToken"></a>

```go
func ApiToken() ActionConnectionOktaApiTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOktaApiTokenOutputReference">ActionConnectionOktaApiTokenOutputReference</a>

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOktaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionOpenaiApiKeyOutputReference <a name="ActionConnectionOpenaiApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionOpenaiApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionOpenaiApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionOpenaiOutputReference <a name="ActionConnectionOpenaiOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionOpenaiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionOpenaiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionOpenaiApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKey">ActionConnectionOpenaiApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference">ActionConnectionOpenaiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionOpenaiApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiApiKeyOutputReference">ActionConnectionOpenaiApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionOpenaiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionServiceNowBasicAuthOutputReference <a name="ActionConnectionServiceNowBasicAuthOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionServiceNowBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionServiceNowBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionServiceNowOutputReference <a name="ActionConnectionServiceNowOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.putBasicAuth"></a>

```go
func PutBasicAuth(value ActionConnectionServiceNowBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuth">ActionConnectionServiceNowBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.resetBasicAuth"></a>

```go
func ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference">ActionConnectionServiceNowBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.basicAuth"></a>

```go
func BasicAuth() ActionConnectionServiceNowBasicAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowBasicAuthOutputReference">ActionConnectionServiceNowBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.basicAuthInput"></a>

```go
func BasicAuthInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionSplitApiKeyOutputReference <a name="ActionConnectionSplitApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionSplitApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionSplitApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionSplitOutputReference <a name="ActionConnectionSplitOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionSplitApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKey">ActionConnectionSplitApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference">ActionConnectionSplitApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionSplitApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionSplitApiKeyOutputReference">ActionConnectionSplitApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionStatsigApiKeyOutputReference <a name="ActionConnectionStatsigApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionStatsigApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionStatsigApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionStatsigOutputReference <a name="ActionConnectionStatsigOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionStatsigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionStatsigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionStatsigApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKey">ActionConnectionStatsigApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference">ActionConnectionStatsigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionStatsigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigApiKeyOutputReference">ActionConnectionStatsigApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionStatsigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionVirusTotalApiKeyOutputReference <a name="ActionConnectionVirusTotalApiKeyOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionVirusTotalApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionVirusTotalApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionConnectionVirusTotalOutputReference <a name="ActionConnectionVirusTotalOutputReference" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionconnection"

actionconnection.NewActionConnectionVirusTotalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionConnectionVirusTotalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.putApiKey"></a>

```go
func PutApiKey(value ActionConnectionVirusTotalApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKey">ActionConnectionVirusTotalApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference">ActionConnectionVirusTotalApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.apiKey"></a>

```go
func ApiKey() ActionConnectionVirusTotalApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalApiKeyOutputReference">ActionConnectionVirusTotalApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionConnection.ActionConnectionVirusTotalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



