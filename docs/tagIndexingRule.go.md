# `tagIndexingRule` Submodule <a name="`tagIndexingRule` Submodule" id="@cdktn/provider-datadog.tagIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagIndexingRule <a name="TagIndexingRule" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.NewTagIndexingRule(scope Construct, id *string, config TagIndexingRuleConfig) TagIndexingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig">TagIndexingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig">TagIndexingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode">ResetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches">ResetIgnoredMetricNameMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions"></a>

```go
func PutOptions(value TagIndexingRuleOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `ResetExcludeTagsMode` <a name="ResetExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode"></a>

```go
func ResetExcludeTagsMode()
```

##### `ResetIgnoredMetricNameMatches` <a name="ResetIgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches"></a>

```go
func ResetIgnoredMetricNameMatches()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.TagIndexingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.TagIndexingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.TagIndexingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.TagIndexingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TagIndexingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TagIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TagIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle">CreatedByHandle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle">ModifiedByHandle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder">RuleOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput">ExcludeTagsModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput">IgnoredMetricNameMatchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput">MetricNameMatchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches">IgnoredMetricNameMatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches">MetricNameMatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedByHandle`<sup>Required</sup> <a name="CreatedByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle"></a>

```go
func CreatedByHandle() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedByHandle`<sup>Required</sup> <a name="ModifiedByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle"></a>

```go
func ModifiedByHandle() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options"></a>

```go
func Options() TagIndexingRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a>

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder"></a>

```go
func RuleOrder() *f64
```

- *Type:* *f64

---

##### `ExcludeTagsModeInput`<sup>Optional</sup> <a name="ExcludeTagsModeInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput"></a>

```go
func ExcludeTagsModeInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoredMetricNameMatchesInput`<sup>Optional</sup> <a name="IgnoredMetricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput"></a>

```go
func IgnoredMetricNameMatchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricNameMatchesInput`<sup>Optional</sup> <a name="MetricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput"></a>

```go
func MetricNameMatchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeTagsMode`<sup>Required</sup> <a name="ExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode"></a>

```go
func ExcludeTagsMode() interface{}
```

- *Type:* interface{}

---

##### `IgnoredMetricNameMatches`<sup>Required</sup> <a name="IgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches"></a>

```go
func IgnoredMetricNameMatches() *[]*string
```

- *Type:* *[]*string

---

##### `MetricNameMatches`<sup>Required</sup> <a name="MetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches"></a>

```go
func MetricNameMatches() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TagIndexingRuleConfig <a name="TagIndexingRuleConfig" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

&tagindexingrule.TagIndexingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MetricNameMatches: *[]*string,
	Name: *string,
	ExcludeTagsMode: interface{},
	IgnoredMetricNameMatches: *[]*string,
	Options: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.tagIndexingRule.TagIndexingRuleOptions,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches">MetricNameMatches</a></code> | <code>*[]*string</code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name">Name</a></code> | <code>*string</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>interface{}</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches">IgnoredMetricNameMatches</a></code> | <code>*[]*string</code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MetricNameMatches`<sup>Required</sup> <a name="MetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches"></a>

```go
MetricNameMatches *[]*string
```

- *Type:* *[]*string

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `ExcludeTagsMode`<sup>Optional</sup> <a name="ExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode"></a>

```go
ExcludeTagsMode interface{}
```

- *Type:* interface{}

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `IgnoredMetricNameMatches`<sup>Optional</sup> <a name="IgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches"></a>

```go
IgnoredMetricNameMatches *[]*string
```

- *Type:* *[]*string

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options"></a>

```go
Options TagIndexingRuleOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

### TagIndexingRuleOptions <a name="TagIndexingRuleOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

&tagindexingrule.TagIndexingRuleOptions {
	Data: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.tagIndexingRule.TagIndexingRuleOptionsData,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data">Data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | Behavioral options for how the rule applies to metrics, including backfill and override behavior. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version">Version</a></code> | <code>*f64</code> | Options schema version. Only `1` is supported. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data"></a>

```go
Data TagIndexingRuleOptionsData
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

Behavioral options for how the rule applies to metrics, including backfill and override behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Options schema version. Only `1` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}

---

### TagIndexingRuleOptionsData <a name="TagIndexingRuleOptionsData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

&tagindexingrule.TagIndexingRuleOptionsData {
	DynamicTags: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags,
	ManagePreexistingMetrics: interface{},
	MetricMatch: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch,
	OverridePreviousRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags">DynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | Configuration for including dynamically queried tags. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics">ManagePreexistingMetrics</a></code> | <code>interface{}</code> | When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch">MetricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | Criteria for matching metrics based on query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules">OverridePreviousRules</a></code> | <code>interface{}</code> | When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`. |

---

##### `DynamicTags`<sup>Optional</sup> <a name="DynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags"></a>

```go
DynamicTags TagIndexingRuleOptionsDataDynamicTags
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

Configuration for including dynamically queried tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}

---

##### `ManagePreexistingMetrics`<sup>Optional</sup> <a name="ManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics"></a>

```go
ManagePreexistingMetrics interface{}
```

- *Type:* interface{}

When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}

---

##### `MetricMatch`<sup>Optional</sup> <a name="MetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch"></a>

```go
MetricMatch TagIndexingRuleOptionsDataMetricMatch
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

Criteria for matching metrics based on query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_match TagIndexingRule#metric_match}

---

##### `OverridePreviousRules`<sup>Optional</sup> <a name="OverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules"></a>

```go
OverridePreviousRules interface{}
```

- *Type:* interface{}

When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}

---

### TagIndexingRuleOptionsDataDynamicTags <a name="TagIndexingRuleOptionsDataDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

&tagindexingrule.TagIndexingRuleOptionsDataDynamicTags {
	QueriedTagsWindowSeconds: *f64,
	RelatedAssetTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds">QueriedTagsWindowSeconds</a></code> | <code>*f64</code> | Lookback window for determining which tags were recently queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags">RelatedAssetTags</a></code> | <code>interface{}</code> | When true, tags from related assets are included. |

---

##### `QueriedTagsWindowSeconds`<sup>Optional</sup> <a name="QueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds"></a>

```go
QueriedTagsWindowSeconds *f64
```

- *Type:* *f64

Lookback window for determining which tags were recently queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#queried_tags_window_seconds TagIndexingRule#queried_tags_window_seconds}

---

##### `RelatedAssetTags`<sup>Optional</sup> <a name="RelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags"></a>

```go
RelatedAssetTags interface{}
```

- *Type:* interface{}

When true, tags from related assets are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#related_asset_tags TagIndexingRule#related_asset_tags}

---

### TagIndexingRuleOptionsDataMetricMatch <a name="TagIndexingRuleOptionsDataMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

&tagindexingrule.TagIndexingRuleOptionsDataMetricMatch {
	IsQueried: interface{},
	NotQueried: interface{},
	NotUsedInAssets: interface{},
	QueriedWindowSeconds: *f64,
	UsedInAssets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried">IsQueried</a></code> | <code>interface{}</code> | Match metrics that are being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried">NotQueried</a></code> | <code>interface{}</code> | Match metrics that are not being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets">NotUsedInAssets</a></code> | <code>interface{}</code> | Match metrics not used in any dashboards or monitors. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds">QueriedWindowSeconds</a></code> | <code>*f64</code> | Window in seconds for evaluating query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets">UsedInAssets</a></code> | <code>interface{}</code> | Match metrics used in dashboards or monitors. |

---

##### `IsQueried`<sup>Optional</sup> <a name="IsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried"></a>

```go
IsQueried interface{}
```

- *Type:* interface{}

Match metrics that are being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#is_queried TagIndexingRule#is_queried}

---

##### `NotQueried`<sup>Optional</sup> <a name="NotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried"></a>

```go
NotQueried interface{}
```

- *Type:* interface{}

Match metrics that are not being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#not_queried TagIndexingRule#not_queried}

---

##### `NotUsedInAssets`<sup>Optional</sup> <a name="NotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets"></a>

```go
NotUsedInAssets interface{}
```

- *Type:* interface{}

Match metrics not used in any dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#not_used_in_assets TagIndexingRule#not_used_in_assets}

---

##### `QueriedWindowSeconds`<sup>Optional</sup> <a name="QueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds"></a>

```go
QueriedWindowSeconds *f64
```

- *Type:* *f64

Window in seconds for evaluating query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#queried_window_seconds TagIndexingRule#queried_window_seconds}

---

##### `UsedInAssets`<sup>Optional</sup> <a name="UsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets"></a>

```go
UsedInAssets interface{}
```

- *Type:* interface{}

Match metrics used in dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#used_in_assets TagIndexingRule#used_in_assets}

---

## Classes <a name="Classes" id="Classes"></a>

### TagIndexingRuleOptionsDataDynamicTagsOutputReference <a name="TagIndexingRuleOptionsDataDynamicTagsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.NewTagIndexingRuleOptionsDataDynamicTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagIndexingRuleOptionsDataDynamicTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds">ResetQueriedTagsWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags">ResetRelatedAssetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueriedTagsWindowSeconds` <a name="ResetQueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds"></a>

```go
func ResetQueriedTagsWindowSeconds()
```

##### `ResetRelatedAssetTags` <a name="ResetRelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags"></a>

```go
func ResetRelatedAssetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput">QueriedTagsWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput">RelatedAssetTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds">QueriedTagsWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags">RelatedAssetTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueriedTagsWindowSecondsInput`<sup>Optional</sup> <a name="QueriedTagsWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput"></a>

```go
func QueriedTagsWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `RelatedAssetTagsInput`<sup>Optional</sup> <a name="RelatedAssetTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput"></a>

```go
func RelatedAssetTagsInput() interface{}
```

- *Type:* interface{}

---

##### `QueriedTagsWindowSeconds`<sup>Required</sup> <a name="QueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds"></a>

```go
func QueriedTagsWindowSeconds() *f64
```

- *Type:* *f64

---

##### `RelatedAssetTags`<sup>Required</sup> <a name="RelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags"></a>

```go
func RelatedAssetTags() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagIndexingRuleOptionsDataMetricMatchOutputReference <a name="TagIndexingRuleOptionsDataMetricMatchOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.NewTagIndexingRuleOptionsDataMetricMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagIndexingRuleOptionsDataMetricMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried">ResetIsQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried">ResetNotQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets">ResetNotUsedInAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds">ResetQueriedWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets">ResetUsedInAssets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsQueried` <a name="ResetIsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried"></a>

```go
func ResetIsQueried()
```

##### `ResetNotQueried` <a name="ResetNotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried"></a>

```go
func ResetNotQueried()
```

##### `ResetNotUsedInAssets` <a name="ResetNotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets"></a>

```go
func ResetNotUsedInAssets()
```

##### `ResetQueriedWindowSeconds` <a name="ResetQueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds"></a>

```go
func ResetQueriedWindowSeconds()
```

##### `ResetUsedInAssets` <a name="ResetUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets"></a>

```go
func ResetUsedInAssets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput">IsQueriedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput">NotQueriedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput">NotUsedInAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput">QueriedWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput">UsedInAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried">IsQueried</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried">NotQueried</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets">NotUsedInAssets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds">QueriedWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets">UsedInAssets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsQueriedInput`<sup>Optional</sup> <a name="IsQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput"></a>

```go
func IsQueriedInput() interface{}
```

- *Type:* interface{}

---

##### `NotQueriedInput`<sup>Optional</sup> <a name="NotQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput"></a>

```go
func NotQueriedInput() interface{}
```

- *Type:* interface{}

---

##### `NotUsedInAssetsInput`<sup>Optional</sup> <a name="NotUsedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput"></a>

```go
func NotUsedInAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `QueriedWindowSecondsInput`<sup>Optional</sup> <a name="QueriedWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput"></a>

```go
func QueriedWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `UsedInAssetsInput`<sup>Optional</sup> <a name="UsedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput"></a>

```go
func UsedInAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `IsQueried`<sup>Required</sup> <a name="IsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried"></a>

```go
func IsQueried() interface{}
```

- *Type:* interface{}

---

##### `NotQueried`<sup>Required</sup> <a name="NotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried"></a>

```go
func NotQueried() interface{}
```

- *Type:* interface{}

---

##### `NotUsedInAssets`<sup>Required</sup> <a name="NotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets"></a>

```go
func NotUsedInAssets() interface{}
```

- *Type:* interface{}

---

##### `QueriedWindowSeconds`<sup>Required</sup> <a name="QueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds"></a>

```go
func QueriedWindowSeconds() *f64
```

- *Type:* *f64

---

##### `UsedInAssets`<sup>Required</sup> <a name="UsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets"></a>

```go
func UsedInAssets() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagIndexingRuleOptionsDataOutputReference <a name="TagIndexingRuleOptionsDataOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.NewTagIndexingRuleOptionsDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagIndexingRuleOptionsDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags">PutDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch">PutMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags">ResetDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics">ResetManagePreexistingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch">ResetMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules">ResetOverridePreviousRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicTags` <a name="PutDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags"></a>

```go
func PutDynamicTags(value TagIndexingRuleOptionsDataDynamicTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `PutMetricMatch` <a name="PutMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch"></a>

```go
func PutMetricMatch(value TagIndexingRuleOptionsDataMetricMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `ResetDynamicTags` <a name="ResetDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags"></a>

```go
func ResetDynamicTags()
```

##### `ResetManagePreexistingMetrics` <a name="ResetManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics"></a>

```go
func ResetManagePreexistingMetrics()
```

##### `ResetMetricMatch` <a name="ResetMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch"></a>

```go
func ResetMetricMatch()
```

##### `ResetOverridePreviousRules` <a name="ResetOverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules"></a>

```go
func ResetOverridePreviousRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags">DynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch">MetricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput">DynamicTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput">ManagePreexistingMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput">MetricMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput">OverridePreviousRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics">ManagePreexistingMetrics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules">OverridePreviousRules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicTags`<sup>Required</sup> <a name="DynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags"></a>

```go
func DynamicTags() TagIndexingRuleOptionsDataDynamicTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a>

---

##### `MetricMatch`<sup>Required</sup> <a name="MetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch"></a>

```go
func MetricMatch() TagIndexingRuleOptionsDataMetricMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a>

---

##### `DynamicTagsInput`<sup>Optional</sup> <a name="DynamicTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput"></a>

```go
func DynamicTagsInput() interface{}
```

- *Type:* interface{}

---

##### `ManagePreexistingMetricsInput`<sup>Optional</sup> <a name="ManagePreexistingMetricsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput"></a>

```go
func ManagePreexistingMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricMatchInput`<sup>Optional</sup> <a name="MetricMatchInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput"></a>

```go
func MetricMatchInput() interface{}
```

- *Type:* interface{}

---

##### `OverridePreviousRulesInput`<sup>Optional</sup> <a name="OverridePreviousRulesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput"></a>

```go
func OverridePreviousRulesInput() interface{}
```

- *Type:* interface{}

---

##### `ManagePreexistingMetrics`<sup>Required</sup> <a name="ManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics"></a>

```go
func ManagePreexistingMetrics() interface{}
```

- *Type:* interface{}

---

##### `OverridePreviousRules`<sup>Required</sup> <a name="OverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules"></a>

```go
func OverridePreviousRules() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagIndexingRuleOptionsOutputReference <a name="TagIndexingRuleOptionsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/tagindexingrule"

tagindexingrule.NewTagIndexingRuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagIndexingRuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData">PutData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutData` <a name="PutData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData"></a>

```go
func PutData(value TagIndexingRuleOptionsData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data">Data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput">DataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data"></a>

```go
func Data() TagIndexingRuleOptionsDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput"></a>

```go
func DataInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



