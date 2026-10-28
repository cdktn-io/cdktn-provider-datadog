# `deploymentGate` Submodule <a name="`deploymentGate` Submodule" id="@cdktn/provider-datadog.deploymentGate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentGate <a name="DeploymentGate" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate datadog_deployment_gate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.NewDeploymentGate(scope Construct, id *string, config DeploymentGateConfig) DeploymentGate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig">DeploymentGateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig">DeploymentGateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun">ResetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDryRun` <a name="ResetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun"></a>

```go
func ResetDryRun()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule"></a>

```go
func ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.DeploymentGate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.DeploymentGate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.DeploymentGate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.DeploymentGate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DeploymentGate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DeploymentGate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DeploymentGate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput">DryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput">EnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun">DryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env">Env</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule"></a>

```go
func Rule() DeploymentGateRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput"></a>

```go
func DryRunInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput"></a>

```go
func EnvInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun"></a>

```go
func DryRun() interface{}
```

- *Type:* interface{}

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env"></a>

```go
func Env() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentGateConfig <a name="DeploymentGateConfig" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

&deploymentgate.DeploymentGateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Env: *string,
	Service: *string,
	DryRun: interface{},
	Identifier: *string,
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env">Env</a></code> | <code>*string</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service">Service</a></code> | <code>*string</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun">DryRun</a></code> | <code>interface{}</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier">Identifier</a></code> | <code>*string</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env"></a>

```go
Env *string
```

- *Type:* *string

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `DryRun`<sup>Optional</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun"></a>

```go
DryRun interface{}
```

- *Type:* interface{}

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

### DeploymentGateRule <a name="DeploymentGateRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

&deploymentgate.DeploymentGateRule {
	Name: *string,
	Type: *string,
	DryRun: interface{},
	Options: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17.deploymentGate.DeploymentGateRuleOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name">Name</a></code> | <code>*string</code> | The rule name. Must be unique within the deployment gate. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type">Type</a></code> | <code>*string</code> | The rule type (e.g., 'faulty_deployment_detection', 'monitor'). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun">DryRun</a></code> | <code>interface{}</code> | Whether the rule is in dry run mode. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

The rule name. Must be unique within the deployment gate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#name DeploymentGate#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type"></a>

```go
Type *string
```

- *Type:* *string

The rule type (e.g., 'faulty_deployment_detection', 'monitor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#type DeploymentGate#type}

---

##### `DryRun`<sup>Optional</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun"></a>

```go
DryRun interface{}
```

- *Type:* interface{}

Whether the rule is in dry run mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options"></a>

```go
Options DeploymentGateRuleOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#options DeploymentGate#options}

---

### DeploymentGateRuleOptions <a name="DeploymentGateRuleOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

&deploymentgate.DeploymentGateRuleOptions {
	AllowedResources: *[]*string,
	Duration: *f64,
	ExcludedResources: *[]*string,
	FailOnNoData: interface{},
	FailOnNoGroupsFound: interface{},
	MonitorIds: interface{},
	Query: *string,
	Warmup: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.allowedResources">AllowedResources</a></code> | <code>*[]*string</code> | Resources to include in faulty deployment detection. Mutually exclusive with excluded_resources. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration">Duration</a></code> | <code>*f64</code> | The duration for the rule. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources">ExcludedResources</a></code> | <code>*[]*string</code> | Resources to exclude from faulty deployment detection. Mutually exclusive with allowed_resources. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoData">FailOnNoData</a></code> | <code>interface{}</code> | Fail if a matching monitor group is in NO DATA state (API default: true). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoGroupsFound">FailOnNoGroupsFound</a></code> | <code>interface{}</code> | Fail if no monitor groups are found (API default: false). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.monitorIds">MonitorIds</a></code> | <code>interface{}</code> | Specific monitors to evaluate. Mutually exclusive with query. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query">Query</a></code> | <code>*string</code> | A query that selects the monitors to evaluate. Mutually exclusive with monitor_ids. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.warmup">Warmup</a></code> | <code>*f64</code> | Seconds to wait after deployment starts before evaluating monitors (API default: 0). |

---

##### `AllowedResources`<sup>Optional</sup> <a name="AllowedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.allowedResources"></a>

```go
AllowedResources *[]*string
```

- *Type:* *[]*string

Resources to include in faulty deployment detection. Mutually exclusive with excluded_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#allowed_resources DeploymentGate#allowed_resources}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

The duration for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#duration DeploymentGate#duration}

---

##### `ExcludedResources`<sup>Optional</sup> <a name="ExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources"></a>

```go
ExcludedResources *[]*string
```

- *Type:* *[]*string

Resources to exclude from faulty deployment detection. Mutually exclusive with allowed_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#excluded_resources DeploymentGate#excluded_resources}

---

##### `FailOnNoData`<sup>Optional</sup> <a name="FailOnNoData" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoData"></a>

```go
FailOnNoData interface{}
```

- *Type:* interface{}

Fail if a matching monitor group is in NO DATA state (API default: true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#fail_on_no_data DeploymentGate#fail_on_no_data}

---

##### `FailOnNoGroupsFound`<sup>Optional</sup> <a name="FailOnNoGroupsFound" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.failOnNoGroupsFound"></a>

```go
FailOnNoGroupsFound interface{}
```

- *Type:* interface{}

Fail if no monitor groups are found (API default: false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#fail_on_no_groups_found DeploymentGate#fail_on_no_groups_found}

---

##### `MonitorIds`<sup>Optional</sup> <a name="MonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.monitorIds"></a>

```go
MonitorIds interface{}
```

- *Type:* interface{}

Specific monitors to evaluate. Mutually exclusive with query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#monitor_ids DeploymentGate#monitor_ids}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query"></a>

```go
Query *string
```

- *Type:* *string

A query that selects the monitors to evaluate. Mutually exclusive with monitor_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#query DeploymentGate#query}

---

##### `Warmup`<sup>Optional</sup> <a name="Warmup" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.warmup"></a>

```go
Warmup *f64
```

- *Type:* *f64

Seconds to wait after deployment starts before evaluating monitors (API default: 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#warmup DeploymentGate#warmup}

---

### DeploymentGateRuleOptionsMonitorIds <a name="DeploymentGateRuleOptionsMonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

&deploymentgate.DeploymentGateRuleOptionsMonitorIds {
	Groups: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.groups">Groups</a></code> | <code>*[]*string</code> | Exact group names to evaluate; an empty list evaluates all groups. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.id">Id</a></code> | <code>*string</code> | The monitor's decimal ID. |

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

Exact group names to evaluate; an empty list evaluates all groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#groups DeploymentGate#groups}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIds.property.id"></a>

```go
Id *string
```

- *Type:* *string

The monitor's decimal ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/deployment_gate#id DeploymentGate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentGateRuleList <a name="DeploymentGateRuleList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.NewDeploymentGateRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DeploymentGateRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get"></a>

```go
func Get(index *f64) DeploymentGateRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeploymentGateRuleOptionsMonitorIdsList <a name="DeploymentGateRuleOptionsMonitorIdsList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.NewDeploymentGateRuleOptionsMonitorIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DeploymentGateRuleOptionsMonitorIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.get"></a>

```go
func Get(index *f64) DeploymentGateRuleOptionsMonitorIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeploymentGateRuleOptionsMonitorIdsOutputReference <a name="DeploymentGateRuleOptionsMonitorIdsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.NewDeploymentGateRuleOptionsMonitorIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DeploymentGateRuleOptionsMonitorIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeploymentGateRuleOptionsOutputReference <a name="DeploymentGateRuleOptionsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.NewDeploymentGateRuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeploymentGateRuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.putMonitorIds">PutMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetAllowedResources">ResetAllowedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources">ResetExcludedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoData">ResetFailOnNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoGroupsFound">ResetFailOnNoGroupsFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetMonitorIds">ResetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetWarmup">ResetWarmup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitorIds` <a name="PutMonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.putMonitorIds"></a>

```go
func PutMonitorIds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.putMonitorIds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedResources` <a name="ResetAllowedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetAllowedResources"></a>

```go
func ResetAllowedResources()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetExcludedResources` <a name="ResetExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources"></a>

```go
func ResetExcludedResources()
```

##### `ResetFailOnNoData` <a name="ResetFailOnNoData" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoData"></a>

```go
func ResetFailOnNoData()
```

##### `ResetFailOnNoGroupsFound` <a name="ResetFailOnNoGroupsFound" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetFailOnNoGroupsFound"></a>

```go
func ResetFailOnNoGroupsFound()
```

##### `ResetMonitorIds` <a name="ResetMonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetMonitorIds"></a>

```go
func ResetMonitorIds()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetWarmup` <a name="ResetWarmup" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetWarmup"></a>

```go
func ResetWarmup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIds">MonitorIds</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList">DeploymentGateRuleOptionsMonitorIdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResourcesInput">AllowedResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput">ExcludedResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoDataInput">FailOnNoDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFoundInput">FailOnNoGroupsFoundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIdsInput">MonitorIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmupInput">WarmupInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResources">AllowedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources">ExcludedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoData">FailOnNoData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFound">FailOnNoGroupsFound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmup">Warmup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitorIds`<sup>Required</sup> <a name="MonitorIds" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIds"></a>

```go
func MonitorIds() DeploymentGateRuleOptionsMonitorIdsList
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsMonitorIdsList">DeploymentGateRuleOptionsMonitorIdsList</a>

---

##### `AllowedResourcesInput`<sup>Optional</sup> <a name="AllowedResourcesInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResourcesInput"></a>

```go
func AllowedResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `ExcludedResourcesInput`<sup>Optional</sup> <a name="ExcludedResourcesInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput"></a>

```go
func ExcludedResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailOnNoDataInput`<sup>Optional</sup> <a name="FailOnNoDataInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoDataInput"></a>

```go
func FailOnNoDataInput() interface{}
```

- *Type:* interface{}

---

##### `FailOnNoGroupsFoundInput`<sup>Optional</sup> <a name="FailOnNoGroupsFoundInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFoundInput"></a>

```go
func FailOnNoGroupsFoundInput() interface{}
```

- *Type:* interface{}

---

##### `MonitorIdsInput`<sup>Optional</sup> <a name="MonitorIdsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.monitorIdsInput"></a>

```go
func MonitorIdsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `WarmupInput`<sup>Optional</sup> <a name="WarmupInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmupInput"></a>

```go
func WarmupInput() *f64
```

- *Type:* *f64

---

##### `AllowedResources`<sup>Required</sup> <a name="AllowedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.allowedResources"></a>

```go
func AllowedResources() *[]*string
```

- *Type:* *[]*string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `ExcludedResources`<sup>Required</sup> <a name="ExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources"></a>

```go
func ExcludedResources() *[]*string
```

- *Type:* *[]*string

---

##### `FailOnNoData`<sup>Required</sup> <a name="FailOnNoData" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoData"></a>

```go
func FailOnNoData() interface{}
```

- *Type:* interface{}

---

##### `FailOnNoGroupsFound`<sup>Required</sup> <a name="FailOnNoGroupsFound" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.failOnNoGroupsFound"></a>

```go
func FailOnNoGroupsFound() interface{}
```

- *Type:* interface{}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Warmup`<sup>Required</sup> <a name="Warmup" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.warmup"></a>

```go
func Warmup() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeploymentGateRuleOutputReference <a name="DeploymentGateRuleOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/deploymentgate"

deploymentgate.NewDeploymentGateRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DeploymentGateRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun">ResetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions"></a>

```go
func PutOptions(value DeploymentGateRuleOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `ResetDryRun` <a name="ResetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun"></a>

```go
func ResetDryRun()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions"></a>

```go
func ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput">DryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun">DryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options"></a>

```go
func Options() DeploymentGateRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a>

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput"></a>

```go
func DryRunInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun"></a>

```go
func DryRun() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



