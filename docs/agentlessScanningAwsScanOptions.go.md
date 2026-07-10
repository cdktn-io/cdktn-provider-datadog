# `agentlessScanningAwsScanOptions` Submodule <a name="`agentlessScanningAwsScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAwsScanOptions <a name="AgentlessScanningAwsScanOptions" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options datadog_agentless_scanning_aws_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/agentlessscanningawsscanoptions"

agentlessscanningawsscanoptions.NewAgentlessScanningAwsScanOptions(scope Construct, id *string, config AgentlessScanningAwsScanOptionsConfig) AgentlessScanningAwsScanOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig">AgentlessScanningAwsScanOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig">AgentlessScanningAwsScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetComplianceHost">ResetComplianceHost</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComplianceHost` <a name="ResetComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetComplianceHost"></a>

```go
func ResetComplianceHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/agentlessscanningawsscanoptions"

agentlessscanningawsscanoptions.AgentlessScanningAwsScanOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/agentlessscanningawsscanoptions"

agentlessscanningawsscanoptions.AgentlessScanningAwsScanOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/agentlessscanningawsscanoptions"

agentlessscanningawsscanoptions.AgentlessScanningAwsScanOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/agentlessscanningawsscanoptions"

agentlessscanningawsscanoptions.AgentlessScanningAwsScanOptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentlessScanningAwsScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentlessScanningAwsScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAwsScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHostInput">ComplianceHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput">LambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput">SensitiveDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput">VulnContainersOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput">VulnHostOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHost">ComplianceHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda">Lambda</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData">SensitiveData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs">VulnContainersOs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs">VulnHostOs</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `ComplianceHostInput`<sup>Optional</sup> <a name="ComplianceHostInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHostInput"></a>

```go
func ComplianceHostInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput"></a>

```go
func LambdaInput() interface{}
```

- *Type:* interface{}

---

##### `SensitiveDataInput`<sup>Optional</sup> <a name="SensitiveDataInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput"></a>

```go
func SensitiveDataInput() interface{}
```

- *Type:* interface{}

---

##### `VulnContainersOsInput`<sup>Optional</sup> <a name="VulnContainersOsInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput"></a>

```go
func VulnContainersOsInput() interface{}
```

- *Type:* interface{}

---

##### `VulnHostOsInput`<sup>Optional</sup> <a name="VulnHostOsInput" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput"></a>

```go
func VulnHostOsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `ComplianceHost`<sup>Required</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.complianceHost"></a>

```go
func ComplianceHost() interface{}
```

- *Type:* interface{}

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda"></a>

```go
func Lambda() interface{}
```

- *Type:* interface{}

---

##### `SensitiveData`<sup>Required</sup> <a name="SensitiveData" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData"></a>

```go
func SensitiveData() interface{}
```

- *Type:* interface{}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs"></a>

```go
func VulnContainersOs() interface{}
```

- *Type:* interface{}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs"></a>

```go
func VulnHostOs() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAwsScanOptionsConfig <a name="AgentlessScanningAwsScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/agentlessscanningawsscanoptions"

&agentlessscanningawsscanoptions.AgentlessScanningAwsScanOptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountId: *string,
	Lambda: interface{},
	SensitiveData: interface{},
	VulnContainersOs: interface{},
	VulnHostOs: interface{},
	ComplianceHost: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda">Lambda</a></code> | <code>interface{}</code> | Indicates if scanning of Lambda functions is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData">SensitiveData</a></code> | <code>interface{}</code> | Indicates if scanning for sensitive data is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs">VulnContainersOs</a></code> | <code>interface{}</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs">VulnHostOs</a></code> | <code>interface{}</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.complianceHost">ComplianceHost</a></code> | <code>interface{}</code> | Indicates if host compliance scanning is enabled. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#aws_account_id AgentlessScanningAwsScanOptions#aws_account_id}

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda"></a>

```go
Lambda interface{}
```

- *Type:* interface{}

Indicates if scanning of Lambda functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#lambda AgentlessScanningAwsScanOptions#lambda}

---

##### `SensitiveData`<sup>Required</sup> <a name="SensitiveData" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData"></a>

```go
SensitiveData interface{}
```

- *Type:* interface{}

Indicates if scanning for sensitive data is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#sensitive_data AgentlessScanningAwsScanOptions#sensitive_data}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs"></a>

```go
VulnContainersOs interface{}
```

- *Type:* interface{}

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#vuln_containers_os AgentlessScanningAwsScanOptions#vuln_containers_os}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs"></a>

```go
VulnHostOs interface{}
```

- *Type:* interface{}

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#vuln_host_os AgentlessScanningAwsScanOptions#vuln_host_os}

---

##### `ComplianceHost`<sup>Optional</sup> <a name="ComplianceHost" id="@cdktn/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.complianceHost"></a>

```go
ComplianceHost interface{}
```

- *Type:* interface{}

Indicates if host compliance scanning is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/agentless_scanning_aws_scan_options#compliance_host AgentlessScanningAwsScanOptions#compliance_host}

---



