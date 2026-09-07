# `actionExecutionPolicy` Submodule <a name="`actionExecutionPolicy` Submodule" id="@cdktn/provider-datadog.actionExecutionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionExecutionPolicy <a name="ActionExecutionPolicy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicy(scope Construct, id *string, config ActionExecutionPolicyConfig) ActionExecutionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig">ActionExecutionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig">ActionExecutionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern">PutActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionPattern` <a name="PutActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern"></a>

```go
func PutActionPattern(value ActionExecutionPolicyActionPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope"></a>

```go
func PutScope(value ActionExecutionPolicyScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget"></a>

```go
func PutTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget"></a>

```go
func ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.ActionExecutionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.ActionExecutionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.ActionExecutionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.ActionExecutionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionExecutionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionExecutionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ActionExecutionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern">ActionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target">Target</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput">ActionPatternInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionPattern`<sup>Required</sup> <a name="ActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern"></a>

```go
func ActionPattern() ActionExecutionPolicyActionPatternOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope"></a>

```go
func Scope() ActionExecutionPolicyScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target"></a>

```go
func Target() ActionExecutionPolicyTargetList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `ActionPatternInput`<sup>Optional</sup> <a name="ActionPatternInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput"></a>

```go
func ActionPatternInput() interface{}
```

- *Type:* interface{}

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionExecutionPolicyActionPattern <a name="ActionExecutionPolicyActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyActionPattern {
	ActionFqns: *[]*string,
	Integration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns">ActionFqns</a></code> | <code>*[]*string</code> | The fully qualified action names this policy matches. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration">Integration</a></code> | <code>*string</code> | The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`. |

---

##### `ActionFqns`<sup>Required</sup> <a name="ActionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns"></a>

```go
ActionFqns *[]*string
```

- *Type:* *[]*string

The fully qualified action names this policy matches.

Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration"></a>

```go
Integration *string
```

- *Type:* *string

The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}

---

### ActionExecutionPolicyConfig <a name="ActionExecutionPolicyConfig" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActionPattern: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionExecutionPolicy.ActionExecutionPolicyActionPattern,
	Effect: *string,
	Name: *string,
	Scope: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionExecutionPolicy.ActionExecutionPolicyScope,
	Target: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern">ActionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect">Effect</a></code> | <code>*string</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target">Target</a></code> | <code>interface{}</code> | target block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionPattern`<sup>Required</sup> <a name="ActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern"></a>

```go
ActionPattern ActionExecutionPolicyActionPattern
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope"></a>

```go
Scope ActionExecutionPolicyScope
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target"></a>

```go
Target interface{}
```

- *Type:* interface{}

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

### ActionExecutionPolicyScope <a name="ActionExecutionPolicyScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScope {
	Kubernetes: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes,
	RemoteActionRshell: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell,
	Scripts: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.actionExecutionPolicy.ActionExecutionPolicyScopeScripts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell">RemoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | remote_action_rshell block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts">Scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | scripts block. |

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes"></a>

```go
Kubernetes ActionExecutionPolicyScopeKubernetes
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}

---

##### `RemoteActionRshell`<sup>Optional</sup> <a name="RemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell"></a>

```go
RemoteActionRshell ActionExecutionPolicyScopeRemoteActionRshell
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

remote_action_rshell block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}

---

##### `Scripts`<sup>Optional</sup> <a name="Scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts"></a>

```go
Scripts ActionExecutionPolicyScopeScripts
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}

---

### ActionExecutionPolicyScopeKubernetes <a name="ActionExecutionPolicyScopeKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScopeKubernetes {
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeKubernetesRule <a name="ActionExecutionPolicyScopeKubernetesRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScopeKubernetesRule {
	TargetNamespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces">TargetNamespaces</a></code> | <code>*[]*string</code> | The Kubernetes namespaces this rule applies to. |

---

##### `TargetNamespaces`<sup>Required</sup> <a name="TargetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces"></a>

```go
TargetNamespaces *[]*string
```

- *Type:* *[]*string

The Kubernetes namespaces this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_namespaces ActionExecutionPolicy#target_namespaces}

---

### ActionExecutionPolicyScopeRemoteActionRshell <a name="ActionExecutionPolicyScopeRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScopeRemoteActionRshell {
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeRemoteActionRshellRule <a name="ActionExecutionPolicyScopeRemoteActionRshellRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScopeRemoteActionRshellRule {
	Access: *string,
	TargetPaths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access">Access</a></code> | <code>*string</code> | The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths">TargetPaths</a></code> | <code>*[]*string</code> | The filesystem paths this rule applies to. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access"></a>

```go
Access *string
```

- *Type:* *string

The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#access ActionExecutionPolicy#access}

---

##### `TargetPaths`<sup>Required</sup> <a name="TargetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths"></a>

```go
TargetPaths *[]*string
```

- *Type:* *[]*string

The filesystem paths this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_paths ActionExecutionPolicy#target_paths}

---

### ActionExecutionPolicyScopeScripts <a name="ActionExecutionPolicyScopeScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScopeScripts {
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeScriptsRule <a name="ActionExecutionPolicyScopeScriptsRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyScopeScriptsRule {
	TargetScriptNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames">TargetScriptNames</a></code> | <code>*[]*string</code> | The script names this rule applies to. |

---

##### `TargetScriptNames`<sup>Required</sup> <a name="TargetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames"></a>

```go
TargetScriptNames *[]*string
```

- *Type:* *[]*string

The script names this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_script_names ActionExecutionPolicy#target_script_names}

---

### ActionExecutionPolicyTarget <a name="ActionExecutionPolicyTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

&actionexecutionpolicy.ActionExecutionPolicyTarget {
	AgentTags: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags">AgentTags</a></code> | <code>*[]*string</code> | The Agent tags identifying the target, for example `env:prod`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name">Name</a></code> | <code>*string</code> | A human-readable name for the target. |

---

##### `AgentTags`<sup>Required</sup> <a name="AgentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags"></a>

```go
AgentTags *[]*string
```

- *Type:* *[]*string

The Agent tags identifying the target, for example `env:prod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#agent_tags ActionExecutionPolicy#agent_tags}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionExecutionPolicyActionPatternOutputReference <a name="ActionExecutionPolicyActionPatternOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyActionPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionExecutionPolicyActionPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput">ActionFqnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput">IntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns">ActionFqns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration">Integration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionFqnsInput`<sup>Optional</sup> <a name="ActionFqnsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput"></a>

```go
func ActionFqnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput"></a>

```go
func IntegrationInput() *string
```

- *Type:* *string

---

##### `ActionFqns`<sup>Required</sup> <a name="ActionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns"></a>

```go
func ActionFqns() *[]*string
```

- *Type:* *[]*string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration"></a>

```go
func Integration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeKubernetesOutputReference <a name="ActionExecutionPolicyScopeKubernetesOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionExecutionPolicyScopeKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule"></a>

```go
func Rule() ActionExecutionPolicyScopeKubernetesRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeKubernetesRuleList <a name="ActionExecutionPolicyScopeKubernetesRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeKubernetesRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionExecutionPolicyScopeKubernetesRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get"></a>

```go
func Get(index *f64) ActionExecutionPolicyScopeKubernetesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeKubernetesRuleOutputReference <a name="ActionExecutionPolicyScopeKubernetesRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeKubernetesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionExecutionPolicyScopeKubernetesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput">TargetNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces">TargetNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNamespacesInput`<sup>Optional</sup> <a name="TargetNamespacesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput"></a>

```go
func TargetNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNamespaces`<sup>Required</sup> <a name="TargetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces"></a>

```go
func TargetNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeOutputReference <a name="ActionExecutionPolicyScopeOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionExecutionPolicyScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell">PutRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts">PutScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell">ResetRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts">ResetScripts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes"></a>

```go
func PutKubernetes(value ActionExecutionPolicyScopeKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `PutRemoteActionRshell` <a name="PutRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell"></a>

```go
func PutRemoteActionRshell(value ActionExecutionPolicyScopeRemoteActionRshell)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `PutScripts` <a name="PutScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts"></a>

```go
func PutScripts(value ActionExecutionPolicyScopeScripts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetRemoteActionRshell` <a name="ResetRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell"></a>

```go
func ResetRemoteActionRshell()
```

##### `ResetScripts` <a name="ResetScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts"></a>

```go
func ResetScripts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell">RemoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts">Scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput">KubernetesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput">RemoteActionRshellInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput">ScriptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes"></a>

```go
func Kubernetes() ActionExecutionPolicyScopeKubernetesOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a>

---

##### `RemoteActionRshell`<sup>Required</sup> <a name="RemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell"></a>

```go
func RemoteActionRshell() ActionExecutionPolicyScopeRemoteActionRshellOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a>

---

##### `Scripts`<sup>Required</sup> <a name="Scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts"></a>

```go
func Scripts() ActionExecutionPolicyScopeScriptsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput"></a>

```go
func KubernetesInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteActionRshellInput`<sup>Optional</sup> <a name="RemoteActionRshellInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput"></a>

```go
func RemoteActionRshellInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptsInput`<sup>Optional</sup> <a name="ScriptsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput"></a>

```go
func ScriptsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeRemoteActionRshellOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeRemoteActionRshellOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionExecutionPolicyScopeRemoteActionRshellOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule"></a>

```go
func Rule() ActionExecutionPolicyScopeRemoteActionRshellRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleList <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeRemoteActionRshellRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionExecutionPolicyScopeRemoteActionRshellRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get"></a>

```go
func Get(index *f64) ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput">TargetPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths">TargetPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `TargetPathsInput`<sup>Optional</sup> <a name="TargetPathsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput"></a>

```go
func TargetPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `TargetPaths`<sup>Required</sup> <a name="TargetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths"></a>

```go
func TargetPaths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeScriptsOutputReference <a name="ActionExecutionPolicyScopeScriptsOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionExecutionPolicyScopeScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule"></a>

```go
func Rule() ActionExecutionPolicyScopeScriptsRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeScriptsRuleList <a name="ActionExecutionPolicyScopeScriptsRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeScriptsRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionExecutionPolicyScopeScriptsRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get"></a>

```go
func Get(index *f64) ActionExecutionPolicyScopeScriptsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyScopeScriptsRuleOutputReference <a name="ActionExecutionPolicyScopeScriptsRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyScopeScriptsRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionExecutionPolicyScopeScriptsRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput">TargetScriptNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames">TargetScriptNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetScriptNamesInput`<sup>Optional</sup> <a name="TargetScriptNamesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput"></a>

```go
func TargetScriptNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetScriptNames`<sup>Required</sup> <a name="TargetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames"></a>

```go
func TargetScriptNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyTargetList <a name="ActionExecutionPolicyTargetList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionExecutionPolicyTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get"></a>

```go
func Get(index *f64) ActionExecutionPolicyTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ActionExecutionPolicyTargetOutputReference <a name="ActionExecutionPolicyTargetOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/actionexecutionpolicy"

actionexecutionpolicy.NewActionExecutionPolicyTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionExecutionPolicyTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput">AgentTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags">AgentTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentTagsInput`<sup>Optional</sup> <a name="AgentTagsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput"></a>

```go
func AgentTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AgentTags`<sup>Required</sup> <a name="AgentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags"></a>

```go
func AgentTags() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



