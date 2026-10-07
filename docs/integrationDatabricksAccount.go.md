# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccount(scope Construct, id *string, config IntegrationDatabricksAccountConfig) IntegrationDatabricksAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows">PutDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows">ResetDataflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication"></a>

```go
func PutAuthentication(value IntegrationDatabricksAccountAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---

##### `PutDataflows` <a name="PutDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows"></a>

```go
func PutDataflows(value IntegrationDatabricksAccountDataflows)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings"></a>

```go
func PutSettings(value IntegrationDatabricksAccountSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---

##### `ResetDataflows` <a name="ResetDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows"></a>

```go
func ResetDataflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.IntegrationDatabricksAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput">AuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput">DataflowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication"></a>

```go
func Authentication() IntegrationDatabricksAccountAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a>

---

##### `Dataflows`<sup>Required</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows"></a>

```go
func Dataflows() IntegrationDatabricksAccountDataflowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings"></a>

```go
func Settings() IntegrationDatabricksAccountSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput"></a>

```go
func AuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `DataflowsInput`<sup>Optional</sup> <a name="DataflowsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput"></a>

```go
func DataflowsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthentication <a name="IntegrationDatabricksAccountAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthentication {
	DatabricksIntegrationAccountBearerTokenAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth,
	DatabricksIntegrationAccountOAuthAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth,
	DatabricksIntegrationAccountPrivateActionRunnerAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth">DatabricksIntegrationAccountBearerTokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | The bearer token authentication method configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth">DatabricksIntegrationAccountOAuthAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | The Databricks OAuth authentication method and service principal configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth">DatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | The Private Action Runner authentication method configured on the account. |

---

##### `DatabricksIntegrationAccountBearerTokenAuth`<sup>Optional</sup> <a name="DatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth"></a>

```go
DatabricksIntegrationAccountBearerTokenAuth IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

The bearer token authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_bearer_token_auth IntegrationDatabricksAccount#databricks_integration_account_bearer_token_auth}

---

##### `DatabricksIntegrationAccountOAuthAuth`<sup>Optional</sup> <a name="DatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth"></a>

```go
DatabricksIntegrationAccountOAuthAuth IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

The Databricks OAuth authentication method and service principal configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_o_auth_auth IntegrationDatabricksAccount#databricks_integration_account_o_auth_auth}

---

##### `DatabricksIntegrationAccountPrivateActionRunnerAuth`<sup>Optional</sup> <a name="DatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```go
DatabricksIntegrationAccountPrivateActionRunnerAuth IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

The Private Action Runner authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_private_action_runner_auth IntegrationDatabricksAccount#databricks_integration_account_private_action_runner_auth}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth {
	AuthType: *string,
	TokenWo: *string,
	TokenWoVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType">AuthType</a></code> | <code>*string</code> | The authentication method type. Valid values are `bearer_token`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo">TokenWo</a></code> | <code>*string</code> | Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion">TokenWoVersion</a></code> | <code>*string</code> | Version trigger for token_wo rotation. String length must be at least 1. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The authentication method type. Valid values are `bearer_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `TokenWo`<sup>Optional</sup> <a name="TokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo"></a>

```go
TokenWo *string
```

- *Type:* *string

Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo IntegrationDatabricksAccount#token_wo}

---

##### `TokenWoVersion`<sup>Optional</sup> <a name="TokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion"></a>

```go
TokenWoVersion *string
```

- *Type:* *string

Version trigger for token_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo_version IntegrationDatabricksAccount#token_wo_version}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth {
	ClientId: *string,
	ClientSecretWo: *string,
	ClientSecretWoVersion: *string,
	AuthType: *string,
	AzureTenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | Secret of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*string</code> | Version trigger for client_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType">AuthType</a></code> | <code>*string</code> | The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID of the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo"></a>

```go
ClientSecretWo *string
```

- *Type:* *string

Secret of the Databricks service principal.

Generate it under User management > Service principals > Credentials & secrets in Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo IntegrationDatabricksAccount#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion"></a>

```go
ClientSecretWoVersion *string
```

- *Type:* *string

Version trigger for client_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo_version IntegrationDatabricksAccount#client_secret_wo_version}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth {
	ConnectionId: *string,
	UserUuid: *string,
	AuthType: *string,
	SecretPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Unique identifier of the Private Action Runner connection holding the credentials. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid">UserUuid</a></code> | <code>*string</code> | Unique identifier of the user the Private Action Runner connection belongs to. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType">AuthType</a></code> | <code>*string</code> | The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath">SecretPath</a></code> | <code>*string</code> | Path of the credential inside the secret backend configured on the runner. |

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Unique identifier of the Private Action Runner connection holding the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `UserUuid`<sup>Required</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid"></a>

```go
UserUuid *string
```

- *Type:* *string

Unique identifier of the user the Private Action Runner connection belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `SecretPath`<sup>Optional</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath"></a>

```go
SecretPath *string
```

- *Type:* *string

Path of the credential inside the secret backend configured on the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Authentication: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication,
	Name: *string,
	Settings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountSettings,
	Dataflows: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | Authentication configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">Name</a></code> | <code>*string</code> | Human-readable name of the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | Settings configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows">Dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | Data Datadog collects from Databricks, keyed by dataflow id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication"></a>

```go
Authentication IntegrationDatabricksAccountAuthentication
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

Authentication configured on the Databricks integration account.

A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#authentication IntegrationDatabricksAccount#authentication}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Human-readable name of the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings"></a>

```go
Settings IntegrationDatabricksAccountSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

Settings configured on the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `Dataflows`<sup>Optional</sup> <a name="Dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows"></a>

```go
Dataflows IntegrationDatabricksAccountDataflows
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

Data Datadog collects from Databricks, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dataflows IntegrationDatabricksAccount#dataflows}

---

### IntegrationDatabricksAccountDataflows <a name="IntegrationDatabricksAccountDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflows {
	DatabricksCloudCostMetrics: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics,
	DatabricksDataObservabilityJobsMonitoring: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring,
	DatabricksDataObservabilityQualityMonitoring: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring,
	DatabricksModelServingMetrics: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics">DatabricksCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring">DatabricksDataObservabilityJobsMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring">DatabricksDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics">DatabricksModelServingMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | Health and usage metrics for your Databricks model serving endpoints. |

---

##### `DatabricksCloudCostMetrics`<sup>Optional</sup> <a name="DatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics"></a>

```go
DatabricksCloudCostMetrics IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_cloud_cost_metrics IntegrationDatabricksAccount#databricks_cloud_cost_metrics}

---

##### `DatabricksDataObservabilityJobsMonitoring`<sup>Optional</sup> <a name="DatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring"></a>

```go
DatabricksDataObservabilityJobsMonitoring IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_jobs_monitoring IntegrationDatabricksAccount#databricks_data_observability_jobs_monitoring}

---

##### `DatabricksDataObservabilityQualityMonitoring`<sup>Optional</sup> <a name="DatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring"></a>

```go
DatabricksDataObservabilityQualityMonitoring IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_quality_monitoring IntegrationDatabricksAccount#databricks_data_observability_quality_monitoring}

---

##### `DatabricksModelServingMetrics`<sup>Optional</sup> <a name="DatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics"></a>

```go
DatabricksModelServingMetrics IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

Health and usage metrics for your Databricks model serving endpoints.

Not supported on accounts that authenticate with `private_action_runner`; on those accounts this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_model_serving_metrics IntegrationDatabricksAccount#databricks_model_serving_metrics}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics {
	Enabled: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings"></a>

```go
Settings IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings {
	CcmCollectAllWorkspaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces">CcmCollectAllWorkspaces</a></code> | <code>interface{}</code> | Whether cost data is collected for every workspace in the Databricks account rather than this workspace only. |

---

##### `CcmCollectAllWorkspaces`<sup>Optional</sup> <a name="CcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces"></a>

```go
CcmCollectAllWorkspaces interface{}
```

- *Type:* interface{}

Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.

This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#ccm_collect_all_workspaces IntegrationDatabricksAccount#ccm_collect_all_workspaces}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring {
	Enabled: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | Settings of the Data Jobs Monitoring dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings"></a>

```go
Settings IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

Settings of the Data Jobs Monitoring dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings {
	DdApiKeyId: *string,
	DdApiKeySecretWo: *string,
	DdApiKeySecretWoVersion: *string,
	DjmGlobalInitScriptEnabled: interface{},
	ScriptGpumEnabled: interface{},
	ScriptLogsEnabled: interface{},
	ServerlessJobsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId">DdApiKeyId</a></code> | <code>*string</code> | ID of the Datadog API key the global init script uses to submit data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo">DdApiKeySecretWo</a></code> | <code>*string</code> | Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion">DdApiKeySecretWoVersion</a></code> | <code>*string</code> | Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>interface{}</code> | Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>interface{}</code> | Whether GPU metrics are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>interface{}</code> | Whether driver and worker logs are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>interface{}</code> | Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. |

---

##### `DdApiKeyId`<sup>Optional</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId"></a>

```go
DdApiKeyId *string
```

- *Type:* *string

ID of the Datadog API key the global init script uses to submit data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `DdApiKeySecretWo`<sup>Optional</sup> <a name="DdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo"></a>

```go
DdApiKeySecretWo *string
```

- *Type:* *string

Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo IntegrationDatabricksAccount#dd_api_key_secret_wo}

---

##### `DdApiKeySecretWoVersion`<sup>Optional</sup> <a name="DdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion"></a>

```go
DdApiKeySecretWoVersion *string
```

- *Type:* *string

Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo_version IntegrationDatabricksAccount#dd_api_key_secret_wo_version}

---

##### `DjmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled"></a>

```go
DjmGlobalInitScriptEnabled interface{}
```

- *Type:* interface{}

Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script.

The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `ScriptGpumEnabled`<sup>Optional</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled"></a>

```go
ScriptGpumEnabled interface{}
```

- *Type:* interface{}

Whether GPU metrics are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `ScriptLogsEnabled`<sup>Optional</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled"></a>

```go
ScriptLogsEnabled interface{}
```

- *Type:* interface{}

Whether driver and worker logs are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `ServerlessJobsEnabled`<sup>Optional</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled"></a>

```go
ServerlessJobsEnabled interface{}
```

- *Type:* interface{}

Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute.

This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring {
	Enabled: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings"></a>

```go
Settings IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings {
	DoCrawlersCron: *string,
	SyncSystemCatalog: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>*string</code> | Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog">SyncSystemCatalog</a></code> | <code>interface{}</code> | Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs. |

---

##### `DoCrawlersCron`<sup>Optional</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron"></a>

```go
DoCrawlersCron *string
```

- *Type:* *string

Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata.

Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `SyncSystemCatalog`<sup>Optional</sup> <a name="SyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog"></a>

```go
SyncSystemCatalog interface{}
```

- *Type:* interface{}

Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#sync_system_catalog IntegrationDatabricksAccount#sync_system_catalog}

---

### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether Datadog collects this data. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

### IntegrationDatabricksAccountSettings <a name="IntegrationDatabricksAccountSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

&integrationdatabricksaccount.IntegrationDatabricksAccountSettings {
	WorkspaceUrl: *string,
	SystemTablesSqlWarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | URL of the Databricks workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>*string</code> | ID of the SQL warehouse used to query the Databricks system tables. |

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl"></a>

```go
WorkspaceUrl *string
```

- *Type:* *string

URL of the Databricks workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `SystemTablesSqlWarehouseId`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId"></a>

```go
SystemTablesSqlWarehouseId *string
```

- *Type:* *string

ID of the SQL warehouse used to query the Databricks system tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo">ResetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion">ResetTokenWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetTokenWo` <a name="ResetTokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo"></a>

```go
func ResetTokenWo()
```

##### `ResetTokenWoVersion` <a name="ResetTokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion"></a>

```go
func ResetTokenWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput">TokenWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput">TokenWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo">TokenWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion">TokenWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `TokenWoInput`<sup>Optional</sup> <a name="TokenWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput"></a>

```go
func TokenWoInput() *string
```

- *Type:* *string

---

##### `TokenWoVersionInput`<sup>Optional</sup> <a name="TokenWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput"></a>

```go
func TokenWoVersionInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### ~~`TokenWo`~~<sup>Required</sup> <a name="TokenWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func TokenWo() *string
```

- *Type:* *string

---

##### `TokenWoVersion`<sup>Required</sup> <a name="TokenWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion"></a>

```go
func TokenWoVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput"></a>

```go
func ClientSecretWoInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput"></a>

```go
func ClientSecretWoVersionInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ClientSecretWo() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion"></a>

```go
func ClientSecretWoVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath">ResetSecretPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetSecretPath` <a name="ResetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath"></a>

```go
func ResetSecretPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput">SecretPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput">UserUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath">SecretPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid">UserUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `SecretPathInput`<sup>Optional</sup> <a name="SecretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput"></a>

```go
func SecretPathInput() *string
```

- *Type:* *string

---

##### `UserUuidInput`<sup>Optional</sup> <a name="UserUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput"></a>

```go
func UserUuidInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `SecretPath`<sup>Required</sup> <a name="SecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath"></a>

```go
func SecretPath() *string
```

- *Type:* *string

---

##### `UserUuid`<sup>Required</sup> <a name="UserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid"></a>

```go
func UserUuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountAuthenticationOutputReference <a name="IntegrationDatabricksAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth">PutDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth">PutDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth">PutDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth">ResetDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth">ResetDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth">ResetDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabricksIntegrationAccountBearerTokenAuth` <a name="PutDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth"></a>

```go
func PutDatabricksIntegrationAccountBearerTokenAuth(value IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---

##### `PutDatabricksIntegrationAccountOAuthAuth` <a name="PutDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth"></a>

```go
func PutDatabricksIntegrationAccountOAuthAuth(value IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---

##### `PutDatabricksIntegrationAccountPrivateActionRunnerAuth` <a name="PutDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```go
func PutDatabricksIntegrationAccountPrivateActionRunnerAuth(value IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---

##### `ResetDatabricksIntegrationAccountBearerTokenAuth` <a name="ResetDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth"></a>

```go
func ResetDatabricksIntegrationAccountBearerTokenAuth()
```

##### `ResetDatabricksIntegrationAccountOAuthAuth` <a name="ResetDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth"></a>

```go
func ResetDatabricksIntegrationAccountOAuthAuth()
```

##### `ResetDatabricksIntegrationAccountPrivateActionRunnerAuth` <a name="ResetDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```go
func ResetDatabricksIntegrationAccountPrivateActionRunnerAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth">DatabricksIntegrationAccountBearerTokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth">DatabricksIntegrationAccountOAuthAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth">DatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput">DatabricksIntegrationAccountBearerTokenAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput">DatabricksIntegrationAccountOAuthAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput">DatabricksIntegrationAccountPrivateActionRunnerAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabricksIntegrationAccountBearerTokenAuth`<sup>Required</sup> <a name="DatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth"></a>

```go
func DatabricksIntegrationAccountBearerTokenAuth() IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a>

---

##### `DatabricksIntegrationAccountOAuthAuth`<sup>Required</sup> <a name="DatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth"></a>

```go
func DatabricksIntegrationAccountOAuthAuth() IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a>

---

##### `DatabricksIntegrationAccountPrivateActionRunnerAuth`<sup>Required</sup> <a name="DatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```go
func DatabricksIntegrationAccountPrivateActionRunnerAuth() IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a>

---

##### `DatabricksIntegrationAccountBearerTokenAuthInput`<sup>Optional</sup> <a name="DatabricksIntegrationAccountBearerTokenAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput"></a>

```go
func DatabricksIntegrationAccountBearerTokenAuthInput() interface{}
```

- *Type:* interface{}

---

##### `DatabricksIntegrationAccountOAuthAuthInput`<sup>Optional</sup> <a name="DatabricksIntegrationAccountOAuthAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput"></a>

```go
func DatabricksIntegrationAccountOAuthAuthInput() interface{}
```

- *Type:* interface{}

---

##### `DatabricksIntegrationAccountPrivateActionRunnerAuthInput`<sup>Optional</sup> <a name="DatabricksIntegrationAccountPrivateActionRunnerAuthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput"></a>

```go
func DatabricksIntegrationAccountPrivateActionRunnerAuthInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings"></a>

```go
func PutSettings(value IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings"></a>

```go
func Settings() IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces">ResetCcmCollectAllWorkspaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCcmCollectAllWorkspaces` <a name="ResetCcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces"></a>

```go
func ResetCcmCollectAllWorkspaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput">CcmCollectAllWorkspacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces">CcmCollectAllWorkspaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CcmCollectAllWorkspacesInput`<sup>Optional</sup> <a name="CcmCollectAllWorkspacesInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput"></a>

```go
func CcmCollectAllWorkspacesInput() interface{}
```

- *Type:* interface{}

---

##### `CcmCollectAllWorkspaces`<sup>Required</sup> <a name="CcmCollectAllWorkspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces"></a>

```go
func CcmCollectAllWorkspaces() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings"></a>

```go
func PutSettings(value IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings"></a>

```go
func Settings() IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId">ResetDdApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo">ResetDdApiKeySecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion">ResetDdApiKeySecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled">ResetDjmGlobalInitScriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled">ResetScriptGpumEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled">ResetScriptLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled">ResetServerlessJobsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDdApiKeyId` <a name="ResetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId"></a>

```go
func ResetDdApiKeyId()
```

##### `ResetDdApiKeySecretWo` <a name="ResetDdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo"></a>

```go
func ResetDdApiKeySecretWo()
```

##### `ResetDdApiKeySecretWoVersion` <a name="ResetDdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion"></a>

```go
func ResetDdApiKeySecretWoVersion()
```

##### `ResetDjmGlobalInitScriptEnabled` <a name="ResetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled"></a>

```go
func ResetDjmGlobalInitScriptEnabled()
```

##### `ResetScriptGpumEnabled` <a name="ResetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled"></a>

```go
func ResetScriptGpumEnabled()
```

##### `ResetScriptLogsEnabled` <a name="ResetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled"></a>

```go
func ResetScriptLogsEnabled()
```

##### `ResetServerlessJobsEnabled` <a name="ResetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled"></a>

```go
func ResetServerlessJobsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput">DdApiKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput">DdApiKeySecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput">DdApiKeySecretWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput">DjmGlobalInitScriptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput">ScriptGpumEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput">ScriptLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput">ServerlessJobsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId">DdApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo">DdApiKeySecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion">DdApiKeySecretWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled">DjmGlobalInitScriptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled">ScriptGpumEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled">ScriptLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled">ServerlessJobsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DdApiKeyIdInput`<sup>Optional</sup> <a name="DdApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput"></a>

```go
func DdApiKeyIdInput() *string
```

- *Type:* *string

---

##### `DdApiKeySecretWoInput`<sup>Optional</sup> <a name="DdApiKeySecretWoInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput"></a>

```go
func DdApiKeySecretWoInput() *string
```

- *Type:* *string

---

##### `DdApiKeySecretWoVersionInput`<sup>Optional</sup> <a name="DdApiKeySecretWoVersionInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput"></a>

```go
func DdApiKeySecretWoVersionInput() *string
```

- *Type:* *string

---

##### `DjmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="DjmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput"></a>

```go
func DjmGlobalInitScriptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptGpumEnabledInput`<sup>Optional</sup> <a name="ScriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput"></a>

```go
func ScriptGpumEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptLogsEnabledInput`<sup>Optional</sup> <a name="ScriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput"></a>

```go
func ScriptLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessJobsEnabledInput`<sup>Optional</sup> <a name="ServerlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput"></a>

```go
func ServerlessJobsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DdApiKeyId`<sup>Required</sup> <a name="DdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId"></a>

```go
func DdApiKeyId() *string
```

- *Type:* *string

---

##### ~~`DdApiKeySecretWo`~~<sup>Required</sup> <a name="DdApiKeySecretWo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func DdApiKeySecretWo() *string
```

- *Type:* *string

---

##### `DdApiKeySecretWoVersion`<sup>Required</sup> <a name="DdApiKeySecretWoVersion" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion"></a>

```go
func DdApiKeySecretWoVersion() *string
```

- *Type:* *string

---

##### `DjmGlobalInitScriptEnabled`<sup>Required</sup> <a name="DjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled"></a>

```go
func DjmGlobalInitScriptEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScriptGpumEnabled`<sup>Required</sup> <a name="ScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled"></a>

```go
func ScriptGpumEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScriptLogsEnabled`<sup>Required</sup> <a name="ScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled"></a>

```go
func ScriptLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ServerlessJobsEnabled`<sup>Required</sup> <a name="ServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled"></a>

```go
func ServerlessJobsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```go
func PutSettings(value IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```go
func Settings() IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron">ResetDoCrawlersCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog">ResetSyncSystemCatalog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoCrawlersCron` <a name="ResetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron"></a>

```go
func ResetDoCrawlersCron()
```

##### `ResetSyncSystemCatalog` <a name="ResetSyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog"></a>

```go
func ResetSyncSystemCatalog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput">DoCrawlersCronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput">SyncSystemCatalogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron">DoCrawlersCron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog">SyncSystemCatalog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DoCrawlersCronInput`<sup>Optional</sup> <a name="DoCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput"></a>

```go
func DoCrawlersCronInput() *string
```

- *Type:* *string

---

##### `SyncSystemCatalogInput`<sup>Optional</sup> <a name="SyncSystemCatalogInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput"></a>

```go
func SyncSystemCatalogInput() interface{}
```

- *Type:* interface{}

---

##### `DoCrawlersCron`<sup>Required</sup> <a name="DoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron"></a>

```go
func DoCrawlersCron() *string
```

- *Type:* *string

---

##### `SyncSystemCatalog`<sup>Required</sup> <a name="SyncSystemCatalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog"></a>

```go
func SyncSystemCatalog() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountDataflowsOutputReference <a name="IntegrationDatabricksAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountDataflowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountDataflowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics">PutDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring">PutDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring">PutDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics">PutDatabricksModelServingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics">ResetDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring">ResetDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring">ResetDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics">ResetDatabricksModelServingMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabricksCloudCostMetrics` <a name="PutDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics"></a>

```go
func PutDatabricksCloudCostMetrics(value IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---

##### `PutDatabricksDataObservabilityJobsMonitoring` <a name="PutDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring"></a>

```go
func PutDatabricksDataObservabilityJobsMonitoring(value IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---

##### `PutDatabricksDataObservabilityQualityMonitoring` <a name="PutDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring"></a>

```go
func PutDatabricksDataObservabilityQualityMonitoring(value IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---

##### `PutDatabricksModelServingMetrics` <a name="PutDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics"></a>

```go
func PutDatabricksModelServingMetrics(value IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---

##### `ResetDatabricksCloudCostMetrics` <a name="ResetDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics"></a>

```go
func ResetDatabricksCloudCostMetrics()
```

##### `ResetDatabricksDataObservabilityJobsMonitoring` <a name="ResetDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring"></a>

```go
func ResetDatabricksDataObservabilityJobsMonitoring()
```

##### `ResetDatabricksDataObservabilityQualityMonitoring` <a name="ResetDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring"></a>

```go
func ResetDatabricksDataObservabilityQualityMonitoring()
```

##### `ResetDatabricksModelServingMetrics` <a name="ResetDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics"></a>

```go
func ResetDatabricksModelServingMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics">DatabricksCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring">DatabricksDataObservabilityJobsMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring">DatabricksDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics">DatabricksModelServingMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput">DatabricksCloudCostMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput">DatabricksDataObservabilityJobsMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput">DatabricksDataObservabilityQualityMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput">DatabricksModelServingMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabricksCloudCostMetrics`<sup>Required</sup> <a name="DatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics"></a>

```go
func DatabricksCloudCostMetrics() IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a>

---

##### `DatabricksDataObservabilityJobsMonitoring`<sup>Required</sup> <a name="DatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring"></a>

```go
func DatabricksDataObservabilityJobsMonitoring() IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a>

---

##### `DatabricksDataObservabilityQualityMonitoring`<sup>Required</sup> <a name="DatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring"></a>

```go
func DatabricksDataObservabilityQualityMonitoring() IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a>

---

##### `DatabricksModelServingMetrics`<sup>Required</sup> <a name="DatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics"></a>

```go
func DatabricksModelServingMetrics() IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a>

---

##### `DatabricksCloudCostMetricsInput`<sup>Optional</sup> <a name="DatabricksCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput"></a>

```go
func DatabricksCloudCostMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabricksDataObservabilityJobsMonitoringInput`<sup>Optional</sup> <a name="DatabricksDataObservabilityJobsMonitoringInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput"></a>

```go
func DatabricksDataObservabilityJobsMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `DatabricksDataObservabilityQualityMonitoringInput`<sup>Optional</sup> <a name="DatabricksDataObservabilityQualityMonitoringInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput"></a>

```go
func DatabricksDataObservabilityQualityMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `DatabricksModelServingMetricsInput`<sup>Optional</sup> <a name="DatabricksModelServingMetricsInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput"></a>

```go
func DatabricksModelServingMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationDatabricksAccountSettingsOutputReference <a name="IntegrationDatabricksAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/integrationdatabricksaccount"

integrationdatabricksaccount.NewIntegrationDatabricksAccountSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationDatabricksAccountSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId">ResetSystemTablesSqlWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemTablesSqlWarehouseId` <a name="ResetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId"></a>

```go
func ResetSystemTablesSqlWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput">SystemTablesSqlWarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId">SystemTablesSqlWarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SystemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="SystemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput"></a>

```go
func SystemTablesSqlWarehouseIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput"></a>

```go
func WorkspaceUrlInput() *string
```

- *Type:* *string

---

##### `SystemTablesSqlWarehouseId`<sup>Required</sup> <a name="SystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId"></a>

```go
func SystemTablesSqlWarehouseId() *string
```

- *Type:* *string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl"></a>

```go
func WorkspaceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



