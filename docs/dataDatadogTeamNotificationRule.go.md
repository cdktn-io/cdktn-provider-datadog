# `dataDatadogTeamNotificationRule` Submodule <a name="`dataDatadogTeamNotificationRule` Submodule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamNotificationRule <a name="DataDatadogTeamNotificationRule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.NewDataDatadogTeamNotificationRule(scope Construct, id *string, config DataDatadogTeamNotificationRuleConfig) DataDatadogTeamNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig">DataDatadogTeamNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.DataDatadogTeamNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.DataDatadogTeamNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.DataDatadogTeamNotificationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.DataDatadogTeamNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogTeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogTeamNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogTeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference">DataDatadogTeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.msTeams">MsTeams</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference">DataDatadogTeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference">DataDatadogTeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference">DataDatadogTeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.email"></a>

```go
func Email() DataDatadogTeamNotificationRuleEmailOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference">DataDatadogTeamNotificationRuleEmailOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MsTeams`<sup>Required</sup> <a name="MsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.msTeams"></a>

```go
func MsTeams() DataDatadogTeamNotificationRuleMsTeamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference">DataDatadogTeamNotificationRuleMsTeamsOutputReference</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.pagerduty"></a>

```go
func Pagerduty() DataDatadogTeamNotificationRulePagerdutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference">DataDatadogTeamNotificationRulePagerdutyOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.slack"></a>

```go
func Slack() DataDatadogTeamNotificationRuleSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference">DataDatadogTeamNotificationRuleSlackOutputReference</a>

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamNotificationRuleConfig <a name="DataDatadogTeamNotificationRuleConfig" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

&datadatadogteamnotificationrule.DataDatadogTeamNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RuleId: *string,
	TeamId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.ruleId">RuleId</a></code> | <code>*string</code> | The notification rule ID to fetch. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The team ID to fetch the notification rule for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

The notification rule ID to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rule#rule_id DataDatadogTeamNotificationRule#rule_id}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The team ID to fetch the notification rule for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rule#team_id DataDatadogTeamNotificationRule#team_id}

---

### DataDatadogTeamNotificationRuleEmail <a name="DataDatadogTeamNotificationRuleEmail" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

&datadatadogteamnotificationrule.DataDatadogTeamNotificationRuleEmail {

}
```


### DataDatadogTeamNotificationRuleMsTeams <a name="DataDatadogTeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

&datadatadogteamnotificationrule.DataDatadogTeamNotificationRuleMsTeams {

}
```


### DataDatadogTeamNotificationRulePagerduty <a name="DataDatadogTeamNotificationRulePagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

&datadatadogteamnotificationrule.DataDatadogTeamNotificationRulePagerduty {

}
```


### DataDatadogTeamNotificationRuleSlack <a name="DataDatadogTeamNotificationRuleSlack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

&datadatadogteamnotificationrule.DataDatadogTeamNotificationRuleSlack {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamNotificationRuleEmailOutputReference <a name="DataDatadogTeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.NewDataDatadogTeamNotificationRuleEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogTeamNotificationRuleEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogTeamNotificationRuleMsTeamsOutputReference <a name="DataDatadogTeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.NewDataDatadogTeamNotificationRuleMsTeamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogTeamNotificationRuleMsTeamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.connectorName">ConnectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```go
func ConnectorName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogTeamNotificationRulePagerdutyOutputReference <a name="DataDatadogTeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.NewDataDatadogTeamNotificationRulePagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogTeamNotificationRulePagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogTeamNotificationRuleSlackOutputReference <a name="DataDatadogTeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogteamnotificationrule"

datadatadogteamnotificationrule.NewDataDatadogTeamNotificationRuleSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogTeamNotificationRuleSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



