# `integrationTwilioAccount` Submodule <a name="`integrationTwilioAccount` Submodule" id="@cdktn/provider-datadog.integrationTwilioAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationTwilioAccount <a name="IntegrationTwilioAccount" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account datadog_integration_twilio_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccount(scope Construct, id *string, config IntegrationTwilioAccountConfig) IntegrationTwilioAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig">IntegrationTwilioAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig">IntegrationTwilioAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows">PutDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetDataflows">ResetDataflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication"></a>

```go
func PutAuthentication(value IntegrationTwilioAccountAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

---

##### `PutDataflows` <a name="PutDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows"></a>

```go
func PutDataflows(value IntegrationTwilioAccountDataflows)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings"></a>

```go
func PutSettings(value IntegrationTwilioAccountSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

---

##### `ResetDataflows` <a name="ResetDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetDataflows"></a>

```go
func ResetDataflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.IntegrationTwilioAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.IntegrationTwilioAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.IntegrationTwilioAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.IntegrationTwilioAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationTwilioAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationTwilioAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationTwilioAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference">IntegrationTwilioAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference">IntegrationTwilioAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference">IntegrationTwilioAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authenticationInput">AuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflowsInput">DataflowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authentication"></a>

```go
func Authentication() IntegrationTwilioAccountAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference">IntegrationTwilioAccountAuthenticationOutputReference</a>

---

##### `Dataflows`<sup>Required</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflows"></a>

```go
func Dataflows() IntegrationTwilioAccountDataflowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference">IntegrationTwilioAccountDataflowsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settings"></a>

```go
func Settings() IntegrationTwilioAccountSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference">IntegrationTwilioAccountSettingsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authenticationInput"></a>

```go
func AuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `DataflowsInput`<sup>Optional</sup> <a name="DataflowsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflowsInput"></a>

```go
func DataflowsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationTwilioAccountAuthentication <a name="IntegrationTwilioAccountAuthentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountAuthentication {
	TwilioIntegrationAccountBasicAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.property.twilioIntegrationAccountBasicAuth">TwilioIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | The basic authentication method and username configured on the account. |

---

##### `TwilioIntegrationAccountBasicAuth`<sup>Optional</sup> <a name="TwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.property.twilioIntegrationAccountBasicAuth"></a>

```go
TwilioIntegrationAccountBasicAuth IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_integration_account_basic_auth IntegrationTwilioAccount#twilio_integration_account_basic_auth}

---

### IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth <a name="IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth {
	PasswordWo: *string,
	PasswordWoVersion: *string,
	Username: *string,
	AuthType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | Secret password or private key. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | Version trigger for password_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.username">Username</a></code> | <code>*string</code> | Non-secret username or public identifier for the credential pair. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.authType">AuthType</a></code> | <code>*string</code> | The authentication method type. Valid values are `basic`. Defaults to `"basic"`. |

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#password_wo IntegrationTwilioAccount#password_wo}

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWoVersion"></a>

```go
PasswordWoVersion *string
```

- *Type:* *string

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#password_wo_version IntegrationTwilioAccount#password_wo_version}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#username IntegrationTwilioAccount#username}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#auth_type IntegrationTwilioAccount#auth_type}

---

### IntegrationTwilioAccountConfig <a name="IntegrationTwilioAccountConfig" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Authentication: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountAuthentication,
	Name: *string,
	Settings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountSettings,
	Dataflows: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountDataflows,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | Authentication configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.name">Name</a></code> | <code>*string</code> | Human-readable name of the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | Settings configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | Data Datadog collects from Twilio, keyed by dataflow id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.authentication"></a>

```go
Authentication IntegrationTwilioAccountAuthentication
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

Authentication configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#authentication IntegrationTwilioAccount#authentication}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Human-readable name of the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#name IntegrationTwilioAccount#name}

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.settings"></a>

```go
Settings IntegrationTwilioAccountSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

Settings configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#settings IntegrationTwilioAccount#settings}

---

##### `Dataflows`<sup>Optional</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dataflows"></a>

```go
Dataflows IntegrationTwilioAccountDataflows
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

Data Datadog collects from Twilio, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#dataflows IntegrationTwilioAccount#dataflows}

---

### IntegrationTwilioAccountDataflows <a name="IntegrationTwilioAccountDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflows {
	TwilioAlertsLogs: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs,
	TwilioCallSummariesLogs: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs,
	TwilioCloudCostMetrics: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics,
	TwilioEventsLogs: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs,
	TwilioMessagesLogs: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioAlertsLogs">TwilioAlertsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCallSummariesLogs">TwilioCallSummariesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCloudCostMetrics">TwilioCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioEventsLogs">TwilioEventsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioMessagesLogs">TwilioMessagesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors. |

---

##### `TwilioAlertsLogs`<sup>Optional</sup> <a name="TwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioAlertsLogs"></a>

```go
TwilioAlertsLogs IntegrationTwilioAccountDataflowsTwilioAlertsLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_alerts_logs IntegrationTwilioAccount#twilio_alerts_logs}

---

##### `TwilioCallSummariesLogs`<sup>Optional</sup> <a name="TwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCallSummariesLogs"></a>

```go
TwilioCallSummariesLogs IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account.

Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_call_summaries_logs IntegrationTwilioAccount#twilio_call_summaries_logs}

---

##### `TwilioCloudCostMetrics`<sup>Optional</sup> <a name="TwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCloudCostMetrics"></a>

```go
TwilioCloudCostMetrics IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_cloud_cost_metrics IntegrationTwilioAccount#twilio_cloud_cost_metrics}

---

##### `TwilioEventsLogs`<sup>Optional</sup> <a name="TwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioEventsLogs"></a>

```go
TwilioEventsLogs IntegrationTwilioAccountDataflowsTwilioEventsLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording.

Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_events_logs IntegrationTwilioAccount#twilio_events_logs}

---

##### `TwilioMessagesLogs`<sup>Optional</sup> <a name="TwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioMessagesLogs"></a>

```go
TwilioMessagesLogs IntegrationTwilioAccountDataflowsTwilioMessagesLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors.

A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#twilio_messages_logs IntegrationTwilioAccount#twilio_messages_logs}

---

### IntegrationTwilioAccountDataflowsTwilioAlertsLogs <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus {

}
```


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus {

}
```


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus {

}
```


### IntegrationTwilioAccountDataflowsTwilioEventsLogs <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus {

}
```


### IntegrationTwilioAccountDataflowsTwilioMessagesLogs <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus {

}
```


### IntegrationTwilioAccountSettings <a name="IntegrationTwilioAccountSettings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

&integrationtwilioaccount.IntegrationTwilioAccountSettings {
	AccountSid: *string,
	CensorLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.accountSid">AccountSid</a></code> | <code>*string</code> | Twilio Account SID that uniquely identifies your Twilio account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.censorLogs">CensorLogs</a></code> | <code>interface{}</code> | When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy. |

---

##### `AccountSid`<sup>Required</sup> <a name="AccountSid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.accountSid"></a>

```go
AccountSid *string
```

- *Type:* *string

Twilio Account SID that uniquely identifies your Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#account_sid IntegrationTwilioAccount#account_sid}

---

##### `CensorLogs`<sup>Optional</sup> <a name="CensorLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.censorLogs"></a>

```go
CensorLogs interface{}
```

- *Type:* interface{}

When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/integration_twilio_account#censor_logs IntegrationTwilioAccount#censor_logs}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationTwilioAccountAuthenticationOutputReference <a name="IntegrationTwilioAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth">PutTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resetTwilioIntegrationAccountBasicAuth">ResetTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTwilioIntegrationAccountBasicAuth` <a name="PutTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth"></a>

```go
func PutTwilioIntegrationAccountBasicAuth(value IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

---

##### `ResetTwilioIntegrationAccountBasicAuth` <a name="ResetTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resetTwilioIntegrationAccountBasicAuth"></a>

```go
func ResetTwilioIntegrationAccountBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuth">TwilioIntegrationAccountBasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuthInput">TwilioIntegrationAccountBasicAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TwilioIntegrationAccountBasicAuth`<sup>Required</sup> <a name="TwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuth"></a>

```go
func TwilioIntegrationAccountBasicAuth() IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference</a>

---

##### `TwilioIntegrationAccountBasicAuthInput`<sup>Optional</sup> <a name="TwilioIntegrationAccountBasicAuthInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuthInput"></a>

```go
func TwilioIntegrationAccountBasicAuthInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference <a name="IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput"></a>

```go
func PasswordWoVersionInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### ~~`PasswordWo`~~<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion"></a>

```go
func PasswordWoVersion() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsOutputReference <a name="IntegrationTwilioAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs">PutTwilioAlertsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs">PutTwilioCallSummariesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics">PutTwilioCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs">PutTwilioEventsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs">PutTwilioMessagesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioAlertsLogs">ResetTwilioAlertsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCallSummariesLogs">ResetTwilioCallSummariesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCloudCostMetrics">ResetTwilioCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioEventsLogs">ResetTwilioEventsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioMessagesLogs">ResetTwilioMessagesLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTwilioAlertsLogs` <a name="PutTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs"></a>

```go
func PutTwilioAlertsLogs(value IntegrationTwilioAccountDataflowsTwilioAlertsLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

---

##### `PutTwilioCallSummariesLogs` <a name="PutTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs"></a>

```go
func PutTwilioCallSummariesLogs(value IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

---

##### `PutTwilioCloudCostMetrics` <a name="PutTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics"></a>

```go
func PutTwilioCloudCostMetrics(value IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

---

##### `PutTwilioEventsLogs` <a name="PutTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs"></a>

```go
func PutTwilioEventsLogs(value IntegrationTwilioAccountDataflowsTwilioEventsLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

---

##### `PutTwilioMessagesLogs` <a name="PutTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs"></a>

```go
func PutTwilioMessagesLogs(value IntegrationTwilioAccountDataflowsTwilioMessagesLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

---

##### `ResetTwilioAlertsLogs` <a name="ResetTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioAlertsLogs"></a>

```go
func ResetTwilioAlertsLogs()
```

##### `ResetTwilioCallSummariesLogs` <a name="ResetTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCallSummariesLogs"></a>

```go
func ResetTwilioCallSummariesLogs()
```

##### `ResetTwilioCloudCostMetrics` <a name="ResetTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCloudCostMetrics"></a>

```go
func ResetTwilioCloudCostMetrics()
```

##### `ResetTwilioEventsLogs` <a name="ResetTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioEventsLogs"></a>

```go
func ResetTwilioEventsLogs()
```

##### `ResetTwilioMessagesLogs` <a name="ResetTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioMessagesLogs"></a>

```go
func ResetTwilioMessagesLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogs">TwilioAlertsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogs">TwilioCallSummariesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetrics">TwilioCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogs">TwilioEventsLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogs">TwilioMessagesLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogsInput">TwilioAlertsLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogsInput">TwilioCallSummariesLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetricsInput">TwilioCloudCostMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogsInput">TwilioEventsLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogsInput">TwilioMessagesLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TwilioAlertsLogs`<sup>Required</sup> <a name="TwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogs"></a>

```go
func TwilioAlertsLogs() IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference</a>

---

##### `TwilioCallSummariesLogs`<sup>Required</sup> <a name="TwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogs"></a>

```go
func TwilioCallSummariesLogs() IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference</a>

---

##### `TwilioCloudCostMetrics`<sup>Required</sup> <a name="TwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetrics"></a>

```go
func TwilioCloudCostMetrics() IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference</a>

---

##### `TwilioEventsLogs`<sup>Required</sup> <a name="TwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogs"></a>

```go
func TwilioEventsLogs() IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference</a>

---

##### `TwilioMessagesLogs`<sup>Required</sup> <a name="TwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogs"></a>

```go
func TwilioMessagesLogs() IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference</a>

---

##### `TwilioAlertsLogsInput`<sup>Optional</sup> <a name="TwilioAlertsLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogsInput"></a>

```go
func TwilioAlertsLogsInput() interface{}
```

- *Type:* interface{}

---

##### `TwilioCallSummariesLogsInput`<sup>Optional</sup> <a name="TwilioCallSummariesLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogsInput"></a>

```go
func TwilioCallSummariesLogsInput() interface{}
```

- *Type:* interface{}

---

##### `TwilioCloudCostMetricsInput`<sup>Optional</sup> <a name="TwilioCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetricsInput"></a>

```go
func TwilioCloudCostMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `TwilioEventsLogsInput`<sup>Optional</sup> <a name="TwilioEventsLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogsInput"></a>

```go
func TwilioEventsLogsInput() interface{}
```

- *Type:* interface{}

---

##### `TwilioMessagesLogsInput`<sup>Optional</sup> <a name="TwilioMessagesLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogsInput"></a>

```go
func TwilioMessagesLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.status"></a>

```go
func Status() IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.status"></a>

```go
func Status() IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.status"></a>

```go
func Status() IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.status"></a>

```go
func Status() IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.status"></a>

```go
func Status() IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus</a>

---


### IntegrationTwilioAccountSettingsOutputReference <a name="IntegrationTwilioAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationtwilioaccount"

integrationtwilioaccount.NewIntegrationTwilioAccountSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationTwilioAccountSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resetCensorLogs">ResetCensorLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCensorLogs` <a name="ResetCensorLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resetCensorLogs"></a>

```go
func ResetCensorLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSidInput">AccountSidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogsInput">CensorLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSid">AccountSid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogs">CensorLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountSidInput`<sup>Optional</sup> <a name="AccountSidInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSidInput"></a>

```go
func AccountSidInput() *string
```

- *Type:* *string

---

##### `CensorLogsInput`<sup>Optional</sup> <a name="CensorLogsInput" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogsInput"></a>

```go
func CensorLogsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountSid`<sup>Required</sup> <a name="AccountSid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSid"></a>

```go
func AccountSid() *string
```

- *Type:* *string

---

##### `CensorLogs`<sup>Required</sup> <a name="CensorLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogs"></a>

```go
func CensorLogs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



