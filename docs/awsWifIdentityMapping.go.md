# `awsWifIdentityMapping` Submodule <a name="`awsWifIdentityMapping` Submodule" id="@cdktn/provider-datadog.awsWifIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsWifIdentityMapping <a name="AwsWifIdentityMapping" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping datadog_aws_wif_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/awswifidentitymapping"

awswifidentitymapping.NewAwsWifIdentityMapping(scope Construct, id *string, config AwsWifIdentityMappingConfig) AwsWifIdentityMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig">AwsWifIdentityMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig">AwsWifIdentityMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/awswifidentitymapping"

awswifidentitymapping.AwsWifIdentityMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/awswifidentitymapping"

awswifidentitymapping.AwsWifIdentityMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/awswifidentitymapping"

awswifidentitymapping.AwsWifIdentityMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/awswifidentitymapping"

awswifidentitymapping.AwsWifIdentityMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsWifIdentityMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsWifIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AwsWifIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountUuid">AccountUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPatternInput">ArnPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPattern">ArnPattern</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountUuid`<sup>Required</sup> <a name="AccountUuid" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountUuid"></a>

```go
func AccountUuid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifierInput"></a>

```go
func AccountIdentifierInput() *string
```

- *Type:* *string

---

##### `ArnPatternInput`<sup>Optional</sup> <a name="ArnPatternInput" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPatternInput"></a>

```go
func ArnPatternInput() *string
```

- *Type:* *string

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifier"></a>

```go
func AccountIdentifier() *string
```

- *Type:* *string

---

##### `ArnPattern`<sup>Required</sup> <a name="ArnPattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPattern"></a>

```go
func ArnPattern() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsWifIdentityMappingConfig <a name="AwsWifIdentityMappingConfig" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/awswifidentitymapping"

&awswifidentitymapping.AwsWifIdentityMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountIdentifier: *string,
	ArnPattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | The email or handle of the Datadog user or service account that the AWS principal authenticates as. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.arnPattern">ArnPattern</a></code> | <code>*string</code> | The AWS caller ARN pattern allowed to authenticate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.accountIdentifier"></a>

```go
AccountIdentifier *string
```

- *Type:* *string

The email or handle of the Datadog user or service account that the AWS principal authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#account_identifier AwsWifIdentityMapping#account_identifier}

---

##### `ArnPattern`<sup>Required</sup> <a name="ArnPattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.arnPattern"></a>

```go
ArnPattern *string
```

- *Type:* *string

The AWS caller ARN pattern allowed to authenticate.

Currently, only the `aws` partition is supported. For role-based authentication, use the STS assumed-role ARN returned by `aws sts get-caller-identity`, not the IAM role ARN shown in the AWS console. A pattern may contain one wildcard only, as a trailing `/*` after a specific resource, for example `arn:aws:sts::123456789012:assumed-role/terraform-runner/*`. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#arn_pattern AwsWifIdentityMapping#arn_pattern}

---



