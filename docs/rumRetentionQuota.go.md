# `rumRetentionQuota` Submodule <a name="`rumRetentionQuota` Submodule" id="@cdktn/provider-datadog.rumRetentionQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionQuota <a name="RumRetentionQuota" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

rumretentionquota.NewRumRetentionQuota(scope Construct, id *string, config RumRetentionQuotaConfig) RumRetentionQuota
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig">RumRetentionQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig">RumRetentionQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom">PutCustom</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom"></a>

```go
func PutCustom(value RumRetentionQuotaCustom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

rumretentionquota.RumRetentionQuota_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

rumretentionquota.RumRetentionQuota_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

rumretentionquota.RumRetentionQuota_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

rumretentionquota.RumRetentionQuota_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RumRetentionQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RumRetentionQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom"></a>

```go
func Custom() RumRetentionQuotaCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionQuotaConfig <a name="RumRetentionQuotaConfig" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

&rumretentionquota.RumRetentionQuotaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Custom: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.rumRetentionQuota.RumRetentionQuotaCustom,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode">Mode</a></code> | <code>*string</code> | The retention quota mode. Valid values are `custom`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom"></a>

```go
Custom RumRetentionQuotaCustom
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

### RumRetentionQuotaCustom <a name="RumRetentionQuotaCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

&rumretentionquota.RumRetentionQuotaCustom {
	DailyResetTime: *string,
	DailyResetTimezone: *string,
	QuotaReachedAction: *string,
	SessionLimit: *f64,
	WindowType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime">DailyResetTime</a></code> | <code>*string</code> | The time of day the quota resets, in `HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone">DailyResetTimezone</a></code> | <code>*string</code> | The UTC offset for `daily_reset_time`, in `±HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction">QuotaReachedAction</a></code> | <code>*string</code> | The action taken after the quota is reached. Valid values are `stop`, `slowdown`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit">SessionLimit</a></code> | <code>*f64</code> | The maximum number of sessions to retain within the window. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType">WindowType</a></code> | <code>*string</code> | The window over which the quota resets. Valid values are `daily`. |

---

##### `DailyResetTime`<sup>Required</sup> <a name="DailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime"></a>

```go
DailyResetTime *string
```

- *Type:* *string

The time of day the quota resets, in `HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}

---

##### `DailyResetTimezone`<sup>Required</sup> <a name="DailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone"></a>

```go
DailyResetTimezone *string
```

- *Type:* *string

The UTC offset for `daily_reset_time`, in `±HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}

---

##### `QuotaReachedAction`<sup>Required</sup> <a name="QuotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction"></a>

```go
QuotaReachedAction *string
```

- *Type:* *string

The action taken after the quota is reached. Valid values are `stop`, `slowdown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}

---

##### `SessionLimit`<sup>Required</sup> <a name="SessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit"></a>

```go
SessionLimit *f64
```

- *Type:* *f64

The maximum number of sessions to retain within the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}

---

##### `WindowType`<sup>Required</sup> <a name="WindowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType"></a>

```go
WindowType *string
```

- *Type:* *string

The window over which the quota resets. Valid values are `daily`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}

---

## Classes <a name="Classes" id="Classes"></a>

### RumRetentionQuotaCustomOutputReference <a name="RumRetentionQuotaCustomOutputReference" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/rumretentionquota"

rumretentionquota.NewRumRetentionQuotaCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RumRetentionQuotaCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput">DailyResetTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput">DailyResetTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput">QuotaReachedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput">SessionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput">WindowTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime">DailyResetTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone">DailyResetTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction">QuotaReachedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit">SessionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType">WindowType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailyResetTimeInput`<sup>Optional</sup> <a name="DailyResetTimeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput"></a>

```go
func DailyResetTimeInput() *string
```

- *Type:* *string

---

##### `DailyResetTimezoneInput`<sup>Optional</sup> <a name="DailyResetTimezoneInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput"></a>

```go
func DailyResetTimezoneInput() *string
```

- *Type:* *string

---

##### `QuotaReachedActionInput`<sup>Optional</sup> <a name="QuotaReachedActionInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput"></a>

```go
func QuotaReachedActionInput() *string
```

- *Type:* *string

---

##### `SessionLimitInput`<sup>Optional</sup> <a name="SessionLimitInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput"></a>

```go
func SessionLimitInput() *f64
```

- *Type:* *f64

---

##### `WindowTypeInput`<sup>Optional</sup> <a name="WindowTypeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput"></a>

```go
func WindowTypeInput() *string
```

- *Type:* *string

---

##### `DailyResetTime`<sup>Required</sup> <a name="DailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime"></a>

```go
func DailyResetTime() *string
```

- *Type:* *string

---

##### `DailyResetTimezone`<sup>Required</sup> <a name="DailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone"></a>

```go
func DailyResetTimezone() *string
```

- *Type:* *string

---

##### `QuotaReachedAction`<sup>Required</sup> <a name="QuotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction"></a>

```go
func QuotaReachedAction() *string
```

- *Type:* *string

---

##### `SessionLimit`<sup>Required</sup> <a name="SessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit"></a>

```go
func SessionLimit() *f64
```

- *Type:* *f64

---

##### `WindowType`<sup>Required</sup> <a name="WindowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType"></a>

```go
func WindowType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



