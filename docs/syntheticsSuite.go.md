# `syntheticsSuite` Submodule <a name="`syntheticsSuite` Submodule" id="@cdktn/provider-datadog.syntheticsSuite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsSuite <a name="SyntheticsSuite" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite datadog_synthetics_suite}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.NewSyntheticsSuite(scope Construct, id *string, config SyntheticsSuiteConfig) SyntheticsSuite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig">SyntheticsSuiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig">SyntheticsSuiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests">PutTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests">ResetTests</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions"></a>

```go
func PutOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTests` <a name="PutTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests"></a>

```go
func PutTests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTests` <a name="ResetTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests"></a>

```go
func ResetTests()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.SyntheticsSuite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.SyntheticsSuite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.SyntheticsSuite_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.SyntheticsSuite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsSuite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsSuite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsSuite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests">Tests</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput">TestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options"></a>

```go
func Options() SyntheticsSuiteOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a>

---

##### `Tests`<sup>Required</sup> <a name="Tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests"></a>

```go
func Tests() SyntheticsSuiteTestsList
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TestsInput`<sup>Optional</sup> <a name="TestsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput"></a>

```go
func TestsInput() interface{}
```

- *Type:* interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsSuiteConfig <a name="SyntheticsSuiteConfig" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

&syntheticssuite.SyntheticsSuiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Message: *string,
	Options: interface{},
	Tags: *[]*string,
	Tests: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message">Message</a></code> | <code>*string</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options">Options</a></code> | <code>interface{}</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests">Tests</a></code> | <code>interface{}</code> | tests block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options"></a>

```go
Options interface{}
```

- *Type:* interface{}

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `Tests`<sup>Optional</sup> <a name="Tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests"></a>

```go
Tests interface{}
```

- *Type:* interface{}

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

### SyntheticsSuiteOptions <a name="SyntheticsSuiteOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

&syntheticssuite.SyntheticsSuiteOptions {
	AlertingThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold">AlertingThreshold</a></code> | <code>*f64</code> | Alerting threshold for the suite. Value must be between 0.000000 and 1.000000. |

---

##### `AlertingThreshold`<sup>Required</sup> <a name="AlertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold"></a>

```go
AlertingThreshold *f64
```

- *Type:* *f64

Alerting threshold for the suite. Value must be between 0.000000 and 1.000000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#alerting_threshold SyntheticsSuite#alerting_threshold}

---

### SyntheticsSuiteTests <a name="SyntheticsSuiteTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

&syntheticssuite.SyntheticsSuiteTests {
	PublicId: *string,
	AlertingCriticality: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId">PublicId</a></code> | <code>*string</code> | Public ID of the test. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality">AlertingCriticality</a></code> | <code>*string</code> | Alerting criticality for the test. Valid values are `ignore`, `critical`. |

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId"></a>

```go
PublicId *string
```

- *Type:* *string

Public ID of the test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#public_id SyntheticsSuite#public_id}

---

##### `AlertingCriticality`<sup>Optional</sup> <a name="AlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality"></a>

```go
AlertingCriticality *string
```

- *Type:* *string

Alerting criticality for the test. Valid values are `ignore`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/synthetics_suite#alerting_criticality SyntheticsSuite#alerting_criticality}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsSuiteOptionsList <a name="SyntheticsSuiteOptionsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.NewSyntheticsSuiteOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsSuiteOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get"></a>

```go
func Get(index *f64) SyntheticsSuiteOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsSuiteOptionsOutputReference <a name="SyntheticsSuiteOptionsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.NewSyntheticsSuiteOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsSuiteOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput">AlertingThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold">AlertingThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertingThresholdInput`<sup>Optional</sup> <a name="AlertingThresholdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput"></a>

```go
func AlertingThresholdInput() *f64
```

- *Type:* *f64

---

##### `AlertingThreshold`<sup>Required</sup> <a name="AlertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold"></a>

```go
func AlertingThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsSuiteTestsList <a name="SyntheticsSuiteTestsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.NewSyntheticsSuiteTestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsSuiteTestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get"></a>

```go
func Get(index *f64) SyntheticsSuiteTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsSuiteTestsOutputReference <a name="SyntheticsSuiteTestsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/syntheticssuite"

syntheticssuite.NewSyntheticsSuiteTestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsSuiteTestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality">ResetAlertingCriticality</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlertingCriticality` <a name="ResetAlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality"></a>

```go
func ResetAlertingCriticality()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput">AlertingCriticalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput">PublicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality">AlertingCriticality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId">PublicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertingCriticalityInput`<sup>Optional</sup> <a name="AlertingCriticalityInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput"></a>

```go
func AlertingCriticalityInput() *string
```

- *Type:* *string

---

##### `PublicIdInput`<sup>Optional</sup> <a name="PublicIdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput"></a>

```go
func PublicIdInput() *string
```

- *Type:* *string

---

##### `AlertingCriticality`<sup>Required</sup> <a name="AlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality"></a>

```go
func AlertingCriticality() *string
```

- *Type:* *string

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId"></a>

```go
func PublicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



