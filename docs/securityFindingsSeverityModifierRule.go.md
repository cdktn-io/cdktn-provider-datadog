# `securityFindingsSeverityModifierRule` Submodule <a name="`securityFindingsSeverityModifierRule` Submodule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsSeverityModifierRule <a name="SecurityFindingsSeverityModifierRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule datadog_security_findings_severity_modifier_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.NewSecurityFindingsSeverityModifierRule(scope Construct, id *string, config SecurityFindingsSeverityModifierRuleConfig) SecurityFindingsSeverityModifierRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig">SecurityFindingsSeverityModifierRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig">SecurityFindingsSeverityModifierRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction"></a>

```go
func PutAction(value SecurityFindingsSeverityModifierRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule"></a>

```go
func PutRule(value SecurityFindingsSeverityModifierRuleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled"></a>

```go
func ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityFindingsSeverityModifierRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityFindingsSeverityModifierRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsSeverityModifierRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action"></a>

```go
func Action() SecurityFindingsSeverityModifierRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule"></a>

```go
func Rule() SecurityFindingsSeverityModifierRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsSeverityModifierRuleAction <a name="SecurityFindingsSeverityModifierRuleAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

&securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRuleAction {
	Set: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet,
	Shift: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set">Set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | Sets matched findings to a fixed severity. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift">Shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | Shifts matched findings up or down by one severity rank. |

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set"></a>

```go
Set SecurityFindingsSeverityModifierRuleActionSet
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

Sets matched findings to a fixed severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#set SecurityFindingsSeverityModifierRule#set}

---

##### `Shift`<sup>Optional</sup> <a name="Shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift"></a>

```go
Shift SecurityFindingsSeverityModifierRuleActionShift
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

Shifts matched findings up or down by one severity rank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#shift SecurityFindingsSeverityModifierRule#shift}

---

### SecurityFindingsSeverityModifierRuleActionSet <a name="SecurityFindingsSeverityModifierRuleActionSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

&securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRuleActionSet {
	Severity: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity">Severity</a></code> | <code>*string</code> | The severity to assign to matched findings. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description">Description</a></code> | <code>*string</code> | An optional free-form explanation for the severity change. |

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

The severity to assign to matched findings.

`info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types. Valid values are `info_none`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity SecurityFindingsSeverityModifierRule#severity}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleActionShift <a name="SecurityFindingsSeverityModifierRuleActionShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

&securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRuleActionShift {
	SeverityDelta: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta">SeverityDelta</a></code> | <code>*string</code> | The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description">Description</a></code> | <code>*string</code> | An optional free-form explanation for the severity change. |

---

##### `SeverityDelta`<sup>Required</sup> <a name="SeverityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta"></a>

```go
SeverityDelta *string
```

- *Type:* *string

The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity_delta SecurityFindingsSeverityModifierRule#severity_delta}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleConfig <a name="SecurityFindingsSeverityModifierRuleConfig" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

&securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction,
	Name: *string,
	Rule: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action"></a>

```go
Action SecurityFindingsSeverityModifierRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule"></a>

```go
Rule SecurityFindingsSeverityModifierRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

### SecurityFindingsSeverityModifierRuleRule <a name="SecurityFindingsSeverityModifierRuleRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

&securityfindingsseveritymodifierrule.SecurityFindingsSeverityModifierRuleRule {
	FindingTypes: *[]*string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes">FindingTypes</a></code> | <code>*[]*string</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query">Query</a></code> | <code>*string</code> | A search query to further filter the findings matched by this rule. |

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes"></a>

```go
FindingTypes *[]*string
```

- *Type:* *[]*string

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#finding_types SecurityFindingsSeverityModifierRule#finding_types}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query"></a>

```go
Query *string
```

- *Type:* *string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#query SecurityFindingsSeverityModifierRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsSeverityModifierRuleActionOutputReference <a name="SecurityFindingsSeverityModifierRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.NewSecurityFindingsSeverityModifierRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsSeverityModifierRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift">PutShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet">ResetSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift">ResetShift</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSet` <a name="PutSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet"></a>

```go
func PutSet(value SecurityFindingsSeverityModifierRuleActionSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `PutShift` <a name="PutShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift"></a>

```go
func PutShift(value SecurityFindingsSeverityModifierRuleActionShift)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `ResetSet` <a name="ResetSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet"></a>

```go
func ResetSet()
```

##### `ResetShift` <a name="ResetShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift"></a>

```go
func ResetShift()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set">Set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift">Shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput">SetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput">ShiftInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set"></a>

```go
func Set() SecurityFindingsSeverityModifierRuleActionSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a>

---

##### `Shift`<sup>Required</sup> <a name="Shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift"></a>

```go
func Shift() SecurityFindingsSeverityModifierRuleActionShiftOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a>

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput"></a>

```go
func SetInput() interface{}
```

- *Type:* interface{}

---

##### `ShiftInput`<sup>Optional</sup> <a name="ShiftInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput"></a>

```go
func ShiftInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsSeverityModifierRuleActionSetOutputReference <a name="SecurityFindingsSeverityModifierRuleActionSetOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.NewSecurityFindingsSeverityModifierRuleActionSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsSeverityModifierRuleActionSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsSeverityModifierRuleActionShiftOutputReference <a name="SecurityFindingsSeverityModifierRuleActionShiftOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.NewSecurityFindingsSeverityModifierRuleActionShiftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsSeverityModifierRuleActionShiftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput">SeverityDeltaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta">SeverityDelta</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `SeverityDeltaInput`<sup>Optional</sup> <a name="SeverityDeltaInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput"></a>

```go
func SeverityDeltaInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SeverityDelta`<sup>Required</sup> <a name="SeverityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta"></a>

```go
func SeverityDelta() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsSeverityModifierRuleRuleOutputReference <a name="SecurityFindingsSeverityModifierRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsseveritymodifierrule"

securityfindingsseveritymodifierrule.NewSecurityFindingsSeverityModifierRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsSeverityModifierRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput">FindingTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FindingTypesInput`<sup>Optional</sup> <a name="FindingTypesInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput"></a>

```go
func FindingTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes"></a>

```go
func FindingTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



