# `teamNotificationRule` Submodule <a name="`teamNotificationRule` Submodule" id="@cdktn/provider-datadog.teamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationRule <a name="TeamNotificationRule" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.NewTeamNotificationRule(scope Construct, id *string, config TeamNotificationRuleConfig) TeamNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig">TeamNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig">TeamNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams">PutMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams">ResetMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty">ResetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack">ResetSlack</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmail` <a name="PutEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail"></a>

```go
func PutEmail(value TeamNotificationRuleEmail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---

##### `PutMsTeams` <a name="PutMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams"></a>

```go
func PutMsTeams(value TeamNotificationRuleMsTeams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---

##### `PutPagerduty` <a name="PutPagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty"></a>

```go
func PutPagerduty(value TeamNotificationRulePagerduty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack"></a>

```go
func PutSlack(value TeamNotificationRuleSlack)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetMsTeams` <a name="ResetMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams"></a>

```go
func ResetMsTeams()
```

##### `ResetPagerduty` <a name="ResetPagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty"></a>

```go
func ResetPagerduty()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack"></a>

```go
func ResetSlack()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.TeamNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.TeamNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.TeamNotificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.TeamNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams">MsTeams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput">EmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput">MsTeamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput">PagerdutyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput">SlackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email"></a>

```go
func Email() TeamNotificationRuleEmailOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MsTeams`<sup>Required</sup> <a name="MsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams"></a>

```go
func MsTeams() TeamNotificationRuleMsTeamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty"></a>

```go
func Pagerduty() TeamNotificationRulePagerdutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack"></a>

```go
func Slack() TeamNotificationRuleSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput"></a>

```go
func EmailInput() interface{}
```

- *Type:* interface{}

---

##### `MsTeamsInput`<sup>Optional</sup> <a name="MsTeamsInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput"></a>

```go
func MsTeamsInput() interface{}
```

- *Type:* interface{}

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput"></a>

```go
func PagerdutyInput() interface{}
```

- *Type:* interface{}

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput"></a>

```go
func SlackInput() interface{}
```

- *Type:* interface{}

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationRuleConfig <a name="TeamNotificationRuleConfig" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

&teamnotificationrule.TeamNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TeamId: *string,
	Email: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.teamNotificationRule.TeamNotificationRuleEmail,
	MsTeams: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.teamNotificationRule.TeamNotificationRuleMsTeams,
	Pagerduty: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.teamNotificationRule.TeamNotificationRulePagerduty,
	Slack: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.teamNotificationRule.TeamNotificationRuleSlack,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The ID of the team that this notification rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams">MsTeams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | ms_teams block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | slack block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The ID of the team that this notification rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#team_id TeamNotificationRule#team_id}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email"></a>

```go
Email TeamNotificationRuleEmail
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#email TeamNotificationRule#email}

---

##### `MsTeams`<sup>Optional</sup> <a name="MsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams"></a>

```go
MsTeams TeamNotificationRuleMsTeams
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

ms_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#ms_teams TeamNotificationRule#ms_teams}

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty"></a>

```go
Pagerduty TeamNotificationRulePagerduty
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#pagerduty TeamNotificationRule#pagerduty}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack"></a>

```go
Slack TeamNotificationRuleSlack
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#slack TeamNotificationRule#slack}

---

### TeamNotificationRuleEmail <a name="TeamNotificationRuleEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

&teamnotificationrule.TeamNotificationRuleEmail {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to send email notifications to team members when alerts are triggered. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to send email notifications to team members when alerts are triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#enabled TeamNotificationRule#enabled}

---

### TeamNotificationRuleMsTeams <a name="TeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

&teamnotificationrule.TeamNotificationRuleMsTeams {
	ConnectorName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName">ConnectorName</a></code> | <code>*string</code> | MS Teams connector name used to route notifications to the appropriate channel. |

---

##### `ConnectorName`<sup>Optional</sup> <a name="ConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName"></a>

```go
ConnectorName *string
```

- *Type:* *string

MS Teams connector name used to route notifications to the appropriate channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#connector_name TeamNotificationRule#connector_name}

---

### TeamNotificationRulePagerduty <a name="TeamNotificationRulePagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

&teamnotificationrule.TeamNotificationRulePagerduty {
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName">ServiceName</a></code> | <code>*string</code> | PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#service_name TeamNotificationRule#service_name}

---

### TeamNotificationRuleSlack <a name="TeamNotificationRuleSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

&teamnotificationrule.TeamNotificationRuleSlack {
	Channel: *string,
	Workspace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel">Channel</a></code> | <code>*string</code> | Slack channel name for notifications, without a leading '#'. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace">Workspace</a></code> | <code>*string</code> | Slack workspace name where the channel is located. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Slack channel name for notifications, without a leading '#'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#channel TeamNotificationRule#channel}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

Slack workspace name where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/team_notification_rule#workspace TeamNotificationRule#workspace}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamNotificationRuleEmailOutputReference <a name="TeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.NewTeamNotificationRuleEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamNotificationRuleEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamNotificationRuleMsTeamsOutputReference <a name="TeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.NewTeamNotificationRuleMsTeamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamNotificationRuleMsTeamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName">ResetConnectorName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectorName` <a name="ResetConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName"></a>

```go
func ResetConnectorName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput">ConnectorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName">ConnectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorNameInput`<sup>Optional</sup> <a name="ConnectorNameInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput"></a>

```go
func ConnectorNameInput() *string
```

- *Type:* *string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```go
func ConnectorName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamNotificationRulePagerdutyOutputReference <a name="TeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.NewTeamNotificationRulePagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamNotificationRulePagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamNotificationRuleSlackOutputReference <a name="TeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/teamnotificationrule"

teamnotificationrule.NewTeamNotificationRuleSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamNotificationRuleSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



