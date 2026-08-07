# `agentlessScanningAzureScanOptions` Submodule <a name="`agentlessScanningAzureScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAzureScanOptions <a name="AgentlessScanningAzureScanOptions" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options datadog_agentless_scanning_azure_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/agentlessscanningazurescanoptions"

agentlessscanningazurescanoptions.NewAgentlessScanningAzureScanOptions(scope Construct, id *string, config AgentlessScanningAzureScanOptionsConfig) AgentlessScanningAzureScanOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig">AgentlessScanningAzureScanOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig">AgentlessScanningAzureScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost">ResetComplianceHost</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComplianceHost` <a name="ResetComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost"></a>

```go
func ResetComplianceHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/agentlessscanningazurescanoptions"

agentlessscanningazurescanoptions.AgentlessScanningAzureScanOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/agentlessscanningazurescanoptions"

agentlessscanningazurescanoptions.AgentlessScanningAzureScanOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/agentlessscanningazurescanoptions"

agentlessscanningazurescanoptions.AgentlessScanningAzureScanOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/agentlessscanningazurescanoptions"

agentlessscanningazurescanoptions.AgentlessScanningAzureScanOptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentlessScanningAzureScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentlessScanningAzureScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAzureScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput">AzureSubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput">ComplianceHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.functionInput">FunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput">VulnContainersOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput">VulnHostOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost">ComplianceHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.function">Function</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs">VulnContainersOs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs">VulnHostOs</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AzureSubscriptionIdInput`<sup>Optional</sup> <a name="AzureSubscriptionIdInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput"></a>

```go
func AzureSubscriptionIdInput() *string
```

- *Type:* *string

---

##### `ComplianceHostInput`<sup>Optional</sup> <a name="ComplianceHostInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput"></a>

```go
func ComplianceHostInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.functionInput"></a>

```go
func FunctionInput() interface{}
```

- *Type:* interface{}

---

##### `VulnContainersOsInput`<sup>Optional</sup> <a name="VulnContainersOsInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput"></a>

```go
func VulnContainersOsInput() interface{}
```

- *Type:* interface{}

---

##### `VulnHostOsInput`<sup>Optional</sup> <a name="VulnHostOsInput" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput"></a>

```go
func VulnHostOsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureSubscriptionId`<sup>Required</sup> <a name="AzureSubscriptionId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId"></a>

```go
func AzureSubscriptionId() *string
```

- *Type:* *string

---

##### `ComplianceHost`<sup>Required</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost"></a>

```go
func ComplianceHost() interface{}
```

- *Type:* interface{}

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.function"></a>

```go
func Function() interface{}
```

- *Type:* interface{}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs"></a>

```go
func VulnContainersOs() interface{}
```

- *Type:* interface{}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs"></a>

```go
func VulnHostOs() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAzureScanOptionsConfig <a name="AgentlessScanningAzureScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/agentlessscanningazurescanoptions"

&agentlessscanningazurescanoptions.AgentlessScanningAzureScanOptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AzureSubscriptionId: *string,
	Function: interface{},
	VulnContainersOs: interface{},
	VulnHostOs: interface{},
	ComplianceHost: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>*string</code> | The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format). |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.function">Function</a></code> | <code>interface{}</code> | Indicates if scanning of Azure Functions is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs">VulnContainersOs</a></code> | <code>interface{}</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs">VulnHostOs</a></code> | <code>interface{}</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost">ComplianceHost</a></code> | <code>interface{}</code> | Indicates whether host compliance scanning is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureSubscriptionId`<sup>Required</sup> <a name="AzureSubscriptionId" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId"></a>

```go
AzureSubscriptionId *string
```

- *Type:* *string

The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options#azure_subscription_id AgentlessScanningAzureScanOptions#azure_subscription_id}

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.function"></a>

```go
Function interface{}
```

- *Type:* interface{}

Indicates if scanning of Azure Functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options#function AgentlessScanningAzureScanOptions#function}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs"></a>

```go
VulnContainersOs interface{}
```

- *Type:* interface{}

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options#vuln_containers_os AgentlessScanningAzureScanOptions#vuln_containers_os}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs"></a>

```go
VulnHostOs interface{}
```

- *Type:* interface{}

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options#vuln_host_os AgentlessScanningAzureScanOptions#vuln_host_os}

---

##### `ComplianceHost`<sup>Optional</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost"></a>

```go
ComplianceHost interface{}
```

- *Type:* interface{}

Indicates whether host compliance scanning is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/agentless_scanning_azure_scan_options#compliance_host AgentlessScanningAzureScanOptions#compliance_host}

---



