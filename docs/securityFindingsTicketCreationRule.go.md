# `securityFindingsTicketCreationRule` Submodule <a name="`securityFindingsTicketCreationRule` Submodule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsTicketCreationRule <a name="SecurityFindingsTicketCreationRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule datadog_security_findings_ticket_creation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.NewSecurityFindingsTicketCreationRule(scope Construct, id *string, config SecurityFindingsTicketCreationRuleConfig) SecurityFindingsTicketCreationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig">SecurityFindingsTicketCreationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig">SecurityFindingsTicketCreationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction"></a>

```go
func PutAction(value SecurityFindingsTicketCreationRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule"></a>

```go
func PutRule(value SecurityFindingsTicketCreationRuleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled"></a>

```go
func ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.SecurityFindingsTicketCreationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.SecurityFindingsTicketCreationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.SecurityFindingsTicketCreationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.SecurityFindingsTicketCreationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityFindingsTicketCreationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityFindingsTicketCreationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsTicketCreationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action"></a>

```go
func Action() SecurityFindingsTicketCreationRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule"></a>

```go
func Rule() SecurityFindingsTicketCreationRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsTicketCreationRuleAction <a name="SecurityFindingsTicketCreationRuleAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

&securityfindingsticketcreationrule.SecurityFindingsTicketCreationRuleAction {
	MaxTicketsPerDay: *f64,
	ProjectId: *string,
	Target: *string,
	AssigneeId: *string,
	Fields: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay">MaxTicketsPerDay</a></code> | <code>*f64</code> | The maximum number of tickets the rule may create per day. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId">ProjectId</a></code> | <code>*string</code> | The UUID of the Case Management project. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target">Target</a></code> | <code>*string</code> | The ticketing system to create tickets in. Valid values are `jira`, `case_management`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId">AssigneeId</a></code> | <code>*string</code> | The UUID of the default assignee for created tickets. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields">Fields</a></code> | <code>*string</code> | A JSON-encoded object of custom fields of the Jira issue to create. |

---

##### `MaxTicketsPerDay`<sup>Required</sup> <a name="MaxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay"></a>

```go
MaxTicketsPerDay *f64
```

- *Type:* *f64

The maximum number of tickets the rule may create per day.

If exceeded, one final ticket will be created, explaining the limit was hit and linking back to the responsible rule. Value must be between 1 and 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#max_tickets_per_day SecurityFindingsTicketCreationRule#max_tickets_per_day}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The UUID of the Case Management project. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#project_id SecurityFindingsTicketCreationRule#project_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target"></a>

```go
Target *string
```

- *Type:* *string

The ticketing system to create tickets in. Valid values are `jira`, `case_management`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#target SecurityFindingsTicketCreationRule#target}

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId"></a>

```go
AssigneeId *string
```

- *Type:* *string

The UUID of the default assignee for created tickets. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#assignee_id SecurityFindingsTicketCreationRule#assignee_id}

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields"></a>

```go
Fields *string
```

- *Type:* *string

A JSON-encoded object of custom fields of the Jira issue to create.

For the list of available fields, see the [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#fields SecurityFindingsTicketCreationRule#fields}

---

### SecurityFindingsTicketCreationRuleConfig <a name="SecurityFindingsTicketCreationRuleConfig" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

&securityfindingsticketcreationrule.SecurityFindingsTicketCreationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction,
	Name: *string,
	Rule: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | The action to take when the ticket creation rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the ticket creation rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the ticket creation rule is enabled. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action"></a>

```go
Action SecurityFindingsTicketCreationRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

The action to take when the ticket creation rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#action SecurityFindingsTicketCreationRule#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ticket creation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#name SecurityFindingsTicketCreationRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule"></a>

```go
Rule SecurityFindingsTicketCreationRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#rule SecurityFindingsTicketCreationRule#rule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the ticket creation rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#enabled SecurityFindingsTicketCreationRule#enabled}

---

### SecurityFindingsTicketCreationRuleRule <a name="SecurityFindingsTicketCreationRuleRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

&securityfindingsticketcreationrule.SecurityFindingsTicketCreationRuleRule {
	FindingTypes: *[]*string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes">FindingTypes</a></code> | <code>*[]*string</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query">Query</a></code> | <code>*string</code> | A search query to further filter the findings matched by this rule. |

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes"></a>

```go
FindingTypes *[]*string
```

- *Type:* *[]*string

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#finding_types SecurityFindingsTicketCreationRule#finding_types}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query"></a>

```go
Query *string
```

- *Type:* *string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/security_findings_ticket_creation_rule#query SecurityFindingsTicketCreationRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsTicketCreationRuleActionOutputReference <a name="SecurityFindingsTicketCreationRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.NewSecurityFindingsTicketCreationRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsTicketCreationRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId"></a>

```go
func ResetAssigneeId()
```

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields"></a>

```go
func ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason">AutoDisabledReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput">MaxTicketsPerDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId">AssigneeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields">Fields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay">MaxTicketsPerDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoDisabledReason`<sup>Required</sup> <a name="AutoDisabledReason" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason"></a>

```go
func AutoDisabledReason() *string
```

- *Type:* *string

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput"></a>

```go
func AssigneeIdInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() *string
```

- *Type:* *string

---

##### `MaxTicketsPerDayInput`<sup>Optional</sup> <a name="MaxTicketsPerDayInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput"></a>

```go
func MaxTicketsPerDayInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId"></a>

```go
func AssigneeId() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields"></a>

```go
func Fields() *string
```

- *Type:* *string

---

##### `MaxTicketsPerDay`<sup>Required</sup> <a name="MaxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay"></a>

```go
func MaxTicketsPerDay() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityFindingsTicketCreationRuleRuleOutputReference <a name="SecurityFindingsTicketCreationRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/securityfindingsticketcreationrule"

securityfindingsticketcreationrule.NewSecurityFindingsTicketCreationRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityFindingsTicketCreationRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput">FindingTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FindingTypesInput`<sup>Optional</sup> <a name="FindingTypesInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput"></a>

```go
func FindingTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes"></a>

```go
func FindingTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



