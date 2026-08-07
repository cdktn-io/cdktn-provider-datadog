# `securityFindingsDueDateRule` Submodule <a name="`securityFindingsDueDateRule` Submodule" id="@cdktn/provider-datadog.securityFindingsDueDateRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDueDateRule <a name="SecurityFindingsDueDateRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule datadog_security_findings_due_date_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.NewSecurityFindingsDueDateRule(scope Construct, id *string, config SecurityFindingsDueDateRuleConfig) SecurityFindingsDueDateRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig">SecurityFindingsDueDateRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig">SecurityFindingsDueDateRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction"></a>

```go
func PutAction(value SecurityFindingsDueDateRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule"></a>

```go
func PutRule(value SecurityFindingsDueDateRuleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled"></a>

```go
func ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.SecurityFindingsDueDateRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.SecurityFindingsDueDateRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.SecurityFindingsDueDateRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.SecurityFindingsDueDateRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityFindingsDueDateRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityFindingsDueDateRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDueDateRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action"></a>

```go
func Action() SecurityFindingsDueDateRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule"></a>

```go
func Rule() SecurityFindingsDueDateRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDueDateRuleAction <a name="SecurityFindingsDueDateRuleAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

&securityfindingsduedaterule.SecurityFindingsDueDateRuleAction {
	DueDaysPerSeverity: interface{},
	DueFrom: *string,
	ReasonDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity">DueDaysPerSeverity</a></code> | <code>interface{}</code> | A list of severity-to-due-date mappings. Each severity may appear at most once. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom">DueFrom</a></code> | <code>*string</code> | The reference point from which the due date is calculated. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription">ReasonDescription</a></code> | <code>*string</code> | An optional description providing more context for the due date assignment. |

---

##### `DueDaysPerSeverity`<sup>Required</sup> <a name="DueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity"></a>

```go
DueDaysPerSeverity interface{}
```

- *Type:* interface{}

A list of severity-to-due-date mappings. Each severity may appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_days_per_severity SecurityFindingsDueDateRule#due_days_per_severity}

---

##### `DueFrom`<sup>Required</sup> <a name="DueFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom"></a>

```go
DueFrom *string
```

- *Type:* *string

The reference point from which the due date is calculated.

When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead. Valid values are `first_seen`, `fix_available`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_from SecurityFindingsDueDateRule#due_from}

---

##### `ReasonDescription`<sup>Optional</sup> <a name="ReasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription"></a>

```go
ReasonDescription *string
```

- *Type:* *string

An optional description providing more context for the due date assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#reason_description SecurityFindingsDueDateRule#reason_description}

---

### SecurityFindingsDueDateRuleActionDueDaysPerSeverity <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

&securityfindingsduedaterule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity {
	DueInDays: *f64,
	Severity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays">DueInDays</a></code> | <code>*f64</code> | The number of days from the reference point until the finding is due. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity">Severity</a></code> | <code>*string</code> | A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`. |

---

##### `DueInDays`<sup>Required</sup> <a name="DueInDays" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays"></a>

```go
DueInDays *f64
```

- *Type:* *f64

The number of days from the reference point until the finding is due.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_in_days SecurityFindingsDueDateRule#due_in_days}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#severity SecurityFindingsDueDateRule#severity}

---

### SecurityFindingsDueDateRuleConfig <a name="SecurityFindingsDueDateRuleConfig" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

&securityfindingsduedaterule.SecurityFindingsDueDateRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction,
	Name: *string,
	Rule: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | The action to take when the due date rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the due date rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the due date rule is enabled. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action"></a>

```go
Action SecurityFindingsDueDateRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

The action to take when the due date rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the due date rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule"></a>

```go
Rule SecurityFindingsDueDateRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the due date rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}

---

### SecurityFindingsDueDateRuleRule <a name="SecurityFindingsDueDateRuleRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

&securityfindingsduedaterule.SecurityFindingsDueDateRuleRule {
	FindingTypes: *[]*string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes">FindingTypes</a></code> | <code>*[]*string</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query">Query</a></code> | <code>*string</code> | A search query to further filter the findings matched by this rule. |

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes"></a>

```go
FindingTypes *[]*string
```

- *Type:* *[]*string

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#finding_types SecurityFindingsDueDateRule#finding_types}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query"></a>

```go
Query *string
```

- *Type:* *string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#query SecurityFindingsDueDateRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsDueDateRuleActionDueDaysPerSeverityList <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityList" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.NewSecurityFindingsDueDateRuleActionDueDaysPerSeverityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityFindingsDueDateRuleActionDueDaysPerSeverityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get"></a>

```go
func Get(index *f64) SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.NewSecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput">DueInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays">DueInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DueInDaysInput`<sup>Optional</sup> <a name="DueInDaysInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput"></a>

```go
func DueInDaysInput() *f64
```

- *Type:* *f64

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `DueInDays`<sup>Required</sup> <a name="DueInDays" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays"></a>

```go
func DueInDays() *f64
```

- *Type:* *f64

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsDueDateRuleActionOutputReference <a name="SecurityFindingsDueDateRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.NewSecurityFindingsDueDateRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsDueDateRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity">PutDueDaysPerSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription">ResetReasonDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDueDaysPerSeverity` <a name="PutDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity"></a>

```go
func PutDueDaysPerSeverity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetReasonDescription` <a name="ResetReasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription"></a>

```go
func ResetReasonDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity">DueDaysPerSeverity</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput">DueDaysPerSeverityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput">DueFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput">ReasonDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom">DueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription">ReasonDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DueDaysPerSeverity`<sup>Required</sup> <a name="DueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity"></a>

```go
func DueDaysPerSeverity() SecurityFindingsDueDateRuleActionDueDaysPerSeverityList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a>

---

##### `DueDaysPerSeverityInput`<sup>Optional</sup> <a name="DueDaysPerSeverityInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput"></a>

```go
func DueDaysPerSeverityInput() interface{}
```

- *Type:* interface{}

---

##### `DueFromInput`<sup>Optional</sup> <a name="DueFromInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput"></a>

```go
func DueFromInput() *string
```

- *Type:* *string

---

##### `ReasonDescriptionInput`<sup>Optional</sup> <a name="ReasonDescriptionInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput"></a>

```go
func ReasonDescriptionInput() *string
```

- *Type:* *string

---

##### `DueFrom`<sup>Required</sup> <a name="DueFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom"></a>

```go
func DueFrom() *string
```

- *Type:* *string

---

##### `ReasonDescription`<sup>Required</sup> <a name="ReasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription"></a>

```go
func ReasonDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsDueDateRuleRuleOutputReference <a name="SecurityFindingsDueDateRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsduedaterule"

securityfindingsduedaterule.NewSecurityFindingsDueDateRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsDueDateRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput">FindingTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FindingTypesInput`<sup>Optional</sup> <a name="FindingTypesInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput"></a>

```go
func FindingTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes"></a>

```go
func FindingTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



