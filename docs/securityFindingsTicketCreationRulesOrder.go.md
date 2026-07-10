# `securityFindingsTicketCreationRulesOrder` Submodule <a name="`securityFindingsTicketCreationRulesOrder` Submodule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsTicketCreationRulesOrder <a name="SecurityFindingsTicketCreationRulesOrder" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rules_order datadog_security_findings_ticket_creation_rules_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/securityfindingsticketcreationrulesorder"

securityfindingsticketcreationrulesorder.NewSecurityFindingsTicketCreationRulesOrder(scope Construct, id *string, config SecurityFindingsTicketCreationRulesOrderConfig) SecurityFindingsTicketCreationRulesOrder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig">SecurityFindingsTicketCreationRulesOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig">SecurityFindingsTicketCreationRulesOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsTicketCreationRulesOrder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/securityfindingsticketcreationrulesorder"

securityfindingsticketcreationrulesorder.SecurityFindingsTicketCreationRulesOrder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/securityfindingsticketcreationrulesorder"

securityfindingsticketcreationrulesorder.SecurityFindingsTicketCreationRulesOrder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/securityfindingsticketcreationrulesorder"

securityfindingsticketcreationrulesorder.SecurityFindingsTicketCreationRulesOrder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/securityfindingsticketcreationrulesorder"

securityfindingsticketcreationrulesorder.SecurityFindingsTicketCreationRulesOrder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityFindingsTicketCreationRulesOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityFindingsTicketCreationRulesOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityFindingsTicketCreationRulesOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rules_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsTicketCreationRulesOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.ruleIdsInput">RuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.ruleIds">RuleIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleIdsInput`<sup>Optional</sup> <a name="RuleIdsInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.ruleIdsInput"></a>

```go
func RuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuleIds`<sup>Required</sup> <a name="RuleIds" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.ruleIds"></a>

```go
func RuleIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsTicketCreationRulesOrderConfig <a name="SecurityFindingsTicketCreationRulesOrderConfig" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/securityfindingsticketcreationrulesorder"

&securityfindingsticketcreationrulesorder.SecurityFindingsTicketCreationRulesOrderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.ruleIds">RuleIds</a></code> | <code>*[]*string</code> | The ordered list of all ticket creation rule IDs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rules_order#name SecurityFindingsTicketCreationRulesOrder#name}

---

##### `RuleIds`<sup>Required</sup> <a name="RuleIds" id="@cdktn/provider-datadog.securityFindingsTicketCreationRulesOrder.SecurityFindingsTicketCreationRulesOrderConfig.property.ruleIds"></a>

```go
RuleIds *[]*string
```

- *Type:* *[]*string

The ordered list of all ticket creation rule IDs.

The order of IDs in this attribute defines the evaluation order of the ticket creation rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rules_order#rule_ids SecurityFindingsTicketCreationRulesOrder#rule_ids}

---



