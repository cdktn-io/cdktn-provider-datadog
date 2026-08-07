# `integrationAwsAccountCcmConfig` Submodule <a name="`integrationAwsAccountCcmConfig` Submodule" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccountCcmConfig <a name="IntegrationAwsAccountCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config datadog_integration_aws_account_ccm_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.NewIntegrationAwsAccountCcmConfig(scope Construct, id *string, config IntegrationAwsAccountCcmConfigConfig) IntegrationAwsAccountCcmConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig">IntegrationAwsAccountCcmConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig">IntegrationAwsAccountCcmConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig">PutCcmConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig">ResetCcmConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCcmConfig` <a name="PutCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig"></a>

```go
func PutCcmConfig(value IntegrationAwsAccountCcmConfigCcmConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---

##### `ResetCcmConfig` <a name="ResetCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig"></a>

```go
func ResetCcmConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationAwsAccountCcmConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationAwsAccountCcmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccountCcmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig">CcmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput">AwsAccountConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput">CcmConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId">AwsAccountConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CcmConfig`<sup>Required</sup> <a name="CcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig"></a>

```go
func CcmConfig() IntegrationAwsAccountCcmConfigCcmConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AwsAccountConfigIdInput`<sup>Optional</sup> <a name="AwsAccountConfigIdInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput"></a>

```go
func AwsAccountConfigIdInput() *string
```

- *Type:* *string

---

##### `CcmConfigInput`<sup>Optional</sup> <a name="CcmConfigInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput"></a>

```go
func CcmConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountConfigId`<sup>Required</sup> <a name="AwsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId"></a>

```go
func AwsAccountConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountCcmConfigCcmConfig <a name="IntegrationAwsAccountCcmConfigCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

&integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfigCcmConfig {
	DataExportConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs">DataExportConfigs</a></code> | <code>interface{}</code> | data_export_configs block. |

---

##### `DataExportConfigs`<sup>Optional</sup> <a name="DataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs"></a>

```go
DataExportConfigs interface{}
```

- *Type:* interface{}

data_export_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#data_export_configs IntegrationAwsAccountCcmConfig#data_export_configs}

---

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

&integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs {
	BucketName: *string,
	BucketRegion: *string,
	ReportName: *string,
	ReportPrefix: *string,
	ReportType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName">BucketName</a></code> | <code>*string</code> | Name of the S3 bucket where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | AWS region of the S3 bucket. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName">ReportName</a></code> | <code>*string</code> | Name of the Cost and Usage Report. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix">ReportPrefix</a></code> | <code>*string</code> | S3 prefix where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType">ReportType</a></code> | <code>*string</code> | Type of the Cost and Usage Report. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Name of the S3 bucket where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#bucket_name IntegrationAwsAccountCcmConfig#bucket_name}

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion"></a>

```go
BucketRegion *string
```

- *Type:* *string

AWS region of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#bucket_region IntegrationAwsAccountCcmConfig#bucket_region}

---

##### `ReportName`<sup>Optional</sup> <a name="ReportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName"></a>

```go
ReportName *string
```

- *Type:* *string

Name of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#report_name IntegrationAwsAccountCcmConfig#report_name}

---

##### `ReportPrefix`<sup>Optional</sup> <a name="ReportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix"></a>

```go
ReportPrefix *string
```

- *Type:* *string

S3 prefix where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#report_prefix IntegrationAwsAccountCcmConfig#report_prefix}

---

##### `ReportType`<sup>Optional</sup> <a name="ReportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType"></a>

```go
ReportType *string
```

- *Type:* *string

Type of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#report_type IntegrationAwsAccountCcmConfig#report_type}

---

### IntegrationAwsAccountCcmConfigConfig <a name="IntegrationAwsAccountCcmConfigConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

&integrationawsaccountccmconfig.IntegrationAwsAccountCcmConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountConfigId: *string,
	CcmConfig: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId">AwsAccountConfigId</a></code> | <code>*string</code> | Unique Datadog ID of the AWS Account Integration Config. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig">CcmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | ccm_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountConfigId`<sup>Required</sup> <a name="AwsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId"></a>

```go
AwsAccountConfigId *string
```

- *Type:* *string

Unique Datadog ID of the AWS Account Integration Config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}

---

##### `CcmConfig`<sup>Optional</sup> <a name="CcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig"></a>

```go
CcmConfig IntegrationAwsAccountCcmConfigCcmConfig
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

ccm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.NewIntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get"></a>

```go
func Get(index *f64) IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.NewIntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName">ResetReportName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix">ResetReportPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType">ResetReportType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion"></a>

```go
func ResetBucketRegion()
```

##### `ResetReportName` <a name="ResetReportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName"></a>

```go
func ResetReportName()
```

##### `ResetReportPrefix` <a name="ResetReportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix"></a>

```go
func ResetReportPrefix()
```

##### `ResetReportType` <a name="ResetReportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType"></a>

```go
func ResetReportType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput">BucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput">ReportNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput">ReportPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput">ReportTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName">ReportName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix">ReportPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType">ReportType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput"></a>

```go
func BucketRegionInput() *string
```

- *Type:* *string

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput"></a>

```go
func ReportNameInput() *string
```

- *Type:* *string

---

##### `ReportPrefixInput`<sup>Optional</sup> <a name="ReportPrefixInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput"></a>

```go
func ReportPrefixInput() *string
```

- *Type:* *string

---

##### `ReportTypeInput`<sup>Optional</sup> <a name="ReportTypeInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput"></a>

```go
func ReportTypeInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName"></a>

```go
func ReportName() *string
```

- *Type:* *string

---

##### `ReportPrefix`<sup>Required</sup> <a name="ReportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix"></a>

```go
func ReportPrefix() *string
```

- *Type:* *string

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType"></a>

```go
func ReportType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountCcmConfigCcmConfigOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationawsaccountccmconfig"

integrationawsaccountccmconfig.NewIntegrationAwsAccountCcmConfigCcmConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountCcmConfigCcmConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs">PutDataExportConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs">ResetDataExportConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataExportConfigs` <a name="PutDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs"></a>

```go
func PutDataExportConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataExportConfigs` <a name="ResetDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs"></a>

```go
func ResetDataExportConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs">DataExportConfigs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput">DataExportConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataExportConfigs`<sup>Required</sup> <a name="DataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs"></a>

```go
func DataExportConfigs() IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a>

---

##### `DataExportConfigsInput`<sup>Optional</sup> <a name="DataExportConfigsInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput"></a>

```go
func DataExportConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



