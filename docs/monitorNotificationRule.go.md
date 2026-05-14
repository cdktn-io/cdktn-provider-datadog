# `monitorNotificationRule` Submodule <a name="`monitorNotificationRule` Submodule" id="@cdktn/provider-datadog.monitorNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorNotificationRule <a name="MonitorNotificationRule" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule datadog_monitor_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.NewMonitorNotificationRule(scope Construct, id *string, config MonitorNotificationRuleConfig) MonitorNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig">MonitorNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig">MonitorNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients">PutConditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetConditionalRecipients">ResetConditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditionalRecipients` <a name="PutConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients"></a>

```go
func PutConditionalRecipients(value MonitorNotificationRuleConditionalRecipients)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter"></a>

```go
func PutFilter(value MonitorNotificationRuleFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

---

##### `ResetConditionalRecipients` <a name="ResetConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetConditionalRecipients"></a>

```go
func ResetConditionalRecipients()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetRecipients"></a>

```go
func ResetRecipients()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.MonitorNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.MonitorNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.MonitorNotificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.MonitorNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MonitorNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MonitorNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipients">ConditionalRecipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference">MonitorNotificationRuleConditionalRecipientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference">MonitorNotificationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipientsInput">ConditionalRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionalRecipients`<sup>Required</sup> <a name="ConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipients"></a>

```go
func ConditionalRecipients() MonitorNotificationRuleConditionalRecipientsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference">MonitorNotificationRuleConditionalRecipientsOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filter"></a>

```go
func Filter() MonitorNotificationRuleFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference">MonitorNotificationRuleFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConditionalRecipientsInput`<sup>Optional</sup> <a name="ConditionalRecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipientsInput"></a>

```go
func ConditionalRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorNotificationRuleConditionalRecipients <a name="MonitorNotificationRuleConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

&monitornotificationrule.MonitorNotificationRuleConditionalRecipients {
	Conditions: interface{},
	FallbackRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.fallbackRecipients">FallbackRecipients</a></code> | <code>*[]*string</code> | If none of the `conditions` applied, `fallback_recipients` will get notified. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#conditions MonitorNotificationRule#conditions}

---

##### `FallbackRecipients`<sup>Optional</sup> <a name="FallbackRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.fallbackRecipients"></a>

```go
FallbackRecipients *[]*string
```

- *Type:* *[]*string

If none of the `conditions` applied, `fallback_recipients` will get notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#fallback_recipients MonitorNotificationRule#fallback_recipients}

---

### MonitorNotificationRuleConditionalRecipientsConditions <a name="MonitorNotificationRuleConditionalRecipientsConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

&monitornotificationrule.MonitorNotificationRuleConditionalRecipientsConditions {
	Recipients: *[]*string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.recipients">Recipients</a></code> | <code>*[]*string</code> | A list of recipients to notify. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.scope">Scope</a></code> | <code>*string</code> | Defines the condition under which the recipients are notified. |

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

A list of recipients to notify.

Uses the same format as the monitor message field. Must not start with an '@'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Defines the condition under which the recipients are notified.

Supported formats: Monitor status condition using `transition_type:<status>` (for example `transition_type:is_alert`) or a single tag `key:value pair` (for example `env:prod`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

### MonitorNotificationRuleConfig <a name="MonitorNotificationRuleConfig" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

&monitornotificationrule.MonitorNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ConditionalRecipients: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients,
	Filter: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.monitorNotificationRule.MonitorNotificationRuleFilter,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the monitor notification rule. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.conditionalRecipients">ConditionalRecipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | conditional_recipients block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.recipients">Recipients</a></code> | <code>*[]*string</code> | List of recipients to notify. Cannot be used with `conditional_recipients`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the monitor notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#name MonitorNotificationRule#name}

---

##### `ConditionalRecipients`<sup>Optional</sup> <a name="ConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.conditionalRecipients"></a>

```go
ConditionalRecipients MonitorNotificationRuleConditionalRecipients
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

conditional_recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#conditional_recipients MonitorNotificationRule#conditional_recipients}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.filter"></a>

```go
Filter MonitorNotificationRuleFilter
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#filter MonitorNotificationRule#filter}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

List of recipients to notify. Cannot be used with `conditional_recipients`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

### MonitorNotificationRuleFilter <a name="MonitorNotificationRuleFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

&monitornotificationrule.MonitorNotificationRuleFilter {
	Scope: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.scope">Scope</a></code> | <code>*string</code> | A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics). |

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/monitor_notification_rule#tags MonitorNotificationRule#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorNotificationRuleConditionalRecipientsConditionsList <a name="MonitorNotificationRuleConditionalRecipientsConditionsList" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.NewMonitorNotificationRuleConditionalRecipientsConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorNotificationRuleConditionalRecipientsConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get"></a>

```go
func Get(index *f64) MonitorNotificationRuleConditionalRecipientsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorNotificationRuleConditionalRecipientsConditionsOutputReference <a name="MonitorNotificationRuleConditionalRecipientsConditionsOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.NewMonitorNotificationRuleConditionalRecipientsConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorNotificationRuleConditionalRecipientsConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorNotificationRuleConditionalRecipientsOutputReference <a name="MonitorNotificationRuleConditionalRecipientsOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.NewMonitorNotificationRuleConditionalRecipientsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorNotificationRuleConditionalRecipientsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetFallbackRecipients">ResetFallbackRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetFallbackRecipients` <a name="ResetFallbackRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetFallbackRecipients"></a>

```go
func ResetFallbackRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList">MonitorNotificationRuleConditionalRecipientsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipientsInput">FallbackRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipients">FallbackRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditions"></a>

```go
func Conditions() MonitorNotificationRuleConditionalRecipientsConditionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList">MonitorNotificationRuleConditionalRecipientsConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackRecipientsInput`<sup>Optional</sup> <a name="FallbackRecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipientsInput"></a>

```go
func FallbackRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FallbackRecipients`<sup>Required</sup> <a name="FallbackRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipients"></a>

```go
func FallbackRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorNotificationRuleFilterOutputReference <a name="MonitorNotificationRuleFilterOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/monitornotificationrule"

monitornotificationrule.NewMonitorNotificationRuleFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorNotificationRuleFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



