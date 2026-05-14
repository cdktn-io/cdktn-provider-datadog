# `azureUcConfig` Submodule <a name="`azureUcConfig` Submodule" id="@cdktn/provider-datadog.azureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureUcConfig <a name="AzureUcConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.NewAzureUcConfig(scope Construct, id *string, config AzureUcConfigConfig) AzureUcConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig">AzureUcConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig">AzureUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig">PutActualBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig">PutAmortizedBillConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActualBillConfig` <a name="PutActualBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig"></a>

```go
func PutActualBillConfig(value AzureUcConfigActualBillConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---

##### `PutAmortizedBillConfig` <a name="PutAmortizedBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig"></a>

```go
func PutAmortizedBillConfig(value AzureUcConfigAmortizedBillConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AzureUcConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.AzureUcConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.AzureUcConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.AzureUcConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.AzureUcConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AzureUcConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzureUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig">ActualBillConfig</a></code> | <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig">AmortizedBillConfig</a></code> | <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages">ErrorMessages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt">StatusUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput">ActualBillConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput">AmortizedBillConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActualBillConfig`<sup>Required</sup> <a name="ActualBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig"></a>

```go
func ActualBillConfig() AzureUcConfigActualBillConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a>

---

##### `AmortizedBillConfig`<sup>Required</sup> <a name="AmortizedBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig"></a>

```go
func AmortizedBillConfig() AzureUcConfigAmortizedBillConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages"></a>

```go
func ErrorMessages() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusUpdatedAt`<sup>Required</sup> <a name="StatusUpdatedAt" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt"></a>

```go
func StatusUpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActualBillConfigInput`<sup>Optional</sup> <a name="ActualBillConfigInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput"></a>

```go
func ActualBillConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AmortizedBillConfigInput`<sup>Optional</sup> <a name="AmortizedBillConfigInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput"></a>

```go
func AmortizedBillConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureUcConfigActualBillConfig <a name="AzureUcConfigActualBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

&azureucconfig.AzureUcConfigActualBillConfig {
	ExportName: *string,
	ExportPath: *string,
	StorageAccount: *string,
	StorageContainer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName">ExportName</a></code> | <code>*string</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath">ExportPath</a></code> | <code>*string</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer">StorageContainer</a></code> | <code>*string</code> | The name of the storage container where the Azure Export is saved. |

---

##### `ExportName`<sup>Required</sup> <a name="ExportName" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName"></a>

```go
ExportName *string
```

- *Type:* *string

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath"></a>

```go
ExportPath *string
```

- *Type:* *string

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount"></a>

```go
StorageAccount *string
```

- *Type:* *string

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `StorageContainer`<sup>Required</sup> <a name="StorageContainer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer"></a>

```go
StorageContainer *string
```

- *Type:* *string

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigAmortizedBillConfig <a name="AzureUcConfigAmortizedBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

&azureucconfig.AzureUcConfigAmortizedBillConfig {
	ExportName: *string,
	ExportPath: *string,
	StorageAccount: *string,
	StorageContainer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName">ExportName</a></code> | <code>*string</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath">ExportPath</a></code> | <code>*string</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer">StorageContainer</a></code> | <code>*string</code> | The name of the storage container where the Azure Export is saved. |

---

##### `ExportName`<sup>Required</sup> <a name="ExportName" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName"></a>

```go
ExportName *string
```

- *Type:* *string

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath"></a>

```go
ExportPath *string
```

- *Type:* *string

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount"></a>

```go
StorageAccount *string
```

- *Type:* *string

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `StorageContainer`<sup>Required</sup> <a name="StorageContainer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer"></a>

```go
StorageContainer *string
```

- *Type:* *string

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigConfig <a name="AzureUcConfigConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

&azureucconfig.AzureUcConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ActualBillConfig: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.azureUcConfig.AzureUcConfigActualBillConfig,
	AmortizedBillConfig: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.azureUcConfig.AzureUcConfigAmortizedBillConfig,
	ClientId: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The tenant ID of the Azure account. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig">ActualBillConfig</a></code> | <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | actual_bill_config block. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig">AmortizedBillConfig</a></code> | <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | amortized_bill_config block. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID of the Azure account. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope">Scope</a></code> | <code>*string</code> | The scope of your observed subscription. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The tenant ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}

---

##### `ActualBillConfig`<sup>Required</sup> <a name="ActualBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig"></a>

```go
ActualBillConfig AzureUcConfigActualBillConfig
```

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

actual_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}

---

##### `AmortizedBillConfig`<sup>Required</sup> <a name="AmortizedBillConfig" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig"></a>

```go
AmortizedBillConfig AzureUcConfigAmortizedBillConfig
```

- *Type:* <a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

amortized_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope of your observed subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureUcConfigActualBillConfigOutputReference <a name="AzureUcConfigActualBillConfigOutputReference" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.NewAzureUcConfigActualBillConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AzureUcConfigActualBillConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput">ExportNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput">ExportPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput">StorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName">ExportName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath">ExportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer">StorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportNameInput`<sup>Optional</sup> <a name="ExportNameInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput"></a>

```go
func ExportNameInput() *string
```

- *Type:* *string

---

##### `ExportPathInput`<sup>Optional</sup> <a name="ExportPathInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput"></a>

```go
func ExportPathInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput"></a>

```go
func StorageAccountInput() *string
```

- *Type:* *string

---

##### `StorageContainerInput`<sup>Optional</sup> <a name="StorageContainerInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput"></a>

```go
func StorageContainerInput() *string
```

- *Type:* *string

---

##### `ExportName`<sup>Required</sup> <a name="ExportName" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```go
func ExportName() *string
```

- *Type:* *string

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```go
func ExportPath() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```go
func StorageAccount() *string
```

- *Type:* *string

---

##### `StorageContainer`<sup>Required</sup> <a name="StorageContainer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```go
func StorageContainer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AzureUcConfigAmortizedBillConfigOutputReference <a name="AzureUcConfigAmortizedBillConfigOutputReference" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/azureucconfig"

azureucconfig.NewAzureUcConfigAmortizedBillConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AzureUcConfigAmortizedBillConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput">ExportNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput">ExportPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput">StorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName">ExportName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">ExportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">StorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportNameInput`<sup>Optional</sup> <a name="ExportNameInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput"></a>

```go
func ExportNameInput() *string
```

- *Type:* *string

---

##### `ExportPathInput`<sup>Optional</sup> <a name="ExportPathInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput"></a>

```go
func ExportPathInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput"></a>

```go
func StorageAccountInput() *string
```

- *Type:* *string

---

##### `StorageContainerInput`<sup>Optional</sup> <a name="StorageContainerInput" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput"></a>

```go
func StorageContainerInput() *string
```

- *Type:* *string

---

##### `ExportName`<sup>Required</sup> <a name="ExportName" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```go
func ExportName() *string
```

- *Type:* *string

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```go
func ExportPath() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```go
func StorageAccount() *string
```

- *Type:* *string

---

##### `StorageContainer`<sup>Required</sup> <a name="StorageContainer" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```go
func StorageContainer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



