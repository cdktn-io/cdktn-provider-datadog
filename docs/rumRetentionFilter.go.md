# `rumRetentionFilter` Submodule <a name="`rumRetentionFilter` Submodule" id="@cdktn/provider-datadog.rumRetentionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionFilter <a name="RumRetentionFilter" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter datadog_rum_retention_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/rumretentionfilter"

rumretentionfilter.NewRumRetentionFilter(scope Construct, id *string, config RumRetentionFilterConfig) RumRetentionFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig">RumRetentionFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig">RumRetentionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetQuery"></a>

```go
func ResetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/rumretentionfilter"

rumretentionfilter.RumRetentionFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/rumretentionfilter"

rumretentionfilter.RumRetentionFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/rumretentionfilter"

rumretentionfilter.RumRetentionFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/rumretentionfilter"

rumretentionfilter.RumRetentionFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RumRetentionFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RumRetentionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RumRetentionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionFilterConfig <a name="RumRetentionFilterConfig" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/rumretentionfilter"

&rumretentionfilter.RumRetentionFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	EventType: *string,
	Name: *string,
	SampleRate: *f64,
	Enabled: interface{},
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.eventType">EventType</a></code> | <code>*string</code> | The type of RUM events to filter on. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.name">Name</a></code> | <code>*string</code> | The name of a RUM retention filter. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | The sample rate for a RUM retention filter, between 0.1 and 100. Supports one decimal place (for example, 50.5). |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the retention filter is to be enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.query">Query</a></code> | <code>*string</code> | The Query string for a RUM retention filter. Defaults to `""`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#application_id RumRetentionFilter#application_id}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

The type of RUM events to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#event_type RumRetentionFilter#event_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a RUM retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#name RumRetentionFilter#name}

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

The sample rate for a RUM retention filter, between 0.1 and 100. Supports one decimal place (for example, 50.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#sample_rate RumRetentionFilter#sample_rate}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the retention filter is to be enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#enabled RumRetentionFilter#enabled}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

The Query string for a RUM retention filter. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/rum_retention_filter#query RumRetentionFilter#query}

---



