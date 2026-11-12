# `githubOidcIdentityMapping` Submodule <a name="`githubOidcIdentityMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIdentityMapping <a name="GithubOidcIdentityMapping" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping datadog_github_oidc_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

githuboidcidentitymapping.NewGithubOidcIdentityMapping(scope Construct, id *string, config GithubOidcIdentityMappingConfig) GithubOidcIdentityMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig">GithubOidcIdentityMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig">GithubOidcIdentityMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers">PutClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers">ResetClaimMatchers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClaimMatchers` <a name="PutClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers"></a>

```go
func PutClaimMatchers(value GithubOidcIdentityMappingClaimMatchers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `ResetClaimMatchers` <a name="ResetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers"></a>

```go
func ResetClaimMatchers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

githuboidcidentitymapping.GithubOidcIdentityMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

githuboidcidentitymapping.GithubOidcIdentityMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

githuboidcidentitymapping.GithubOidcIdentityMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

githuboidcidentitymapping.GithubOidcIdentityMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GithubOidcIdentityMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GithubOidcIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid">AccountUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput">ClaimMatchersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountUuid`<sup>Required</sup> <a name="AccountUuid" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid"></a>

```go
func AccountUuid() *string
```

- *Type:* *string

---

##### `ClaimMatchers`<sup>Required</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers"></a>

```go
func ClaimMatchers() GithubOidcIdentityMappingClaimMatchersOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput"></a>

```go
func AccountIdentifierInput() *string
```

- *Type:* *string

---

##### `ClaimMatchersInput`<sup>Optional</sup> <a name="ClaimMatchersInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput"></a>

```go
func ClaimMatchersInput() interface{}
```

- *Type:* interface{}

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier"></a>

```go
func AccountIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIdentityMappingClaimMatchers <a name="GithubOidcIdentityMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

&githuboidcidentitymapping.GithubOidcIdentityMappingClaimMatchers {
	Sub: *string,
	Actor: *string,
	ActorId: *string,
	Enterprise: *string,
	EnterpriseId: *string,
	Environment: *string,
	EventName: *string,
	JobWorkflowRef: *string,
	Ref: *string,
	RefType: *string,
	Repository: *string,
	RepositoryId: *string,
	RepositoryOwner: *string,
	RepositoryOwnerId: *string,
	RepositoryVisibility: *string,
	RunnerEnvironment: *string,
	Workflow: *string,
	WorkflowRef: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub">Sub</a></code> | <code>*string</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor">Actor</a></code> | <code>*string</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId">ActorId</a></code> | <code>*string</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise">Enterprise</a></code> | <code>*string</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId">EnterpriseId</a></code> | <code>*string</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment">Environment</a></code> | <code>*string</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName">EventName</a></code> | <code>*string</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>*string</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref">Ref</a></code> | <code>*string</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType">RefType</a></code> | <code>*string</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository">Repository</a></code> | <code>*string</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner">RepositoryOwner</a></code> | <code>*string</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>*string</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>*string</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>*string</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow">Workflow</a></code> | <code>*string</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef">WorkflowRef</a></code> | <code>*string</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub"></a>

```go
Sub *string
```

- *Type:* *string

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#sub GithubOidcIdentityMapping#sub}

---

##### `Actor`<sup>Optional</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor"></a>

```go
Actor *string
```

- *Type:* *string

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor GithubOidcIdentityMapping#actor}

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor_id GithubOidcIdentityMapping#actor_id}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise"></a>

```go
Enterprise *string
```

- *Type:* *string

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise GithubOidcIdentityMapping#enterprise}

---

##### `EnterpriseId`<sup>Optional</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId"></a>

```go
EnterpriseId *string
```

- *Type:* *string

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise_id GithubOidcIdentityMapping#enterprise_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#environment GithubOidcIdentityMapping#environment}

---

##### `EventName`<sup>Optional</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName"></a>

```go
EventName *string
```

- *Type:* *string

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#event_name GithubOidcIdentityMapping#event_name}

---

##### `JobWorkflowRef`<sup>Optional</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef"></a>

```go
JobWorkflowRef *string
```

- *Type:* *string

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#job_workflow_ref GithubOidcIdentityMapping#job_workflow_ref}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref GithubOidcIdentityMapping#ref}

---

##### `RefType`<sup>Optional</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType"></a>

```go
RefType *string
```

- *Type:* *string

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref_type GithubOidcIdentityMapping#ref_type}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository GithubOidcIdentityMapping#repository}

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_id GithubOidcIdentityMapping#repository_id}

---

##### `RepositoryOwner`<sup>Optional</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner"></a>

```go
RepositoryOwner *string
```

- *Type:* *string

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner GithubOidcIdentityMapping#repository_owner}

---

##### `RepositoryOwnerId`<sup>Optional</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId"></a>

```go
RepositoryOwnerId *string
```

- *Type:* *string

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner_id GithubOidcIdentityMapping#repository_owner_id}

---

##### `RepositoryVisibility`<sup>Optional</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility"></a>

```go
RepositoryVisibility *string
```

- *Type:* *string

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_visibility GithubOidcIdentityMapping#repository_visibility}

---

##### `RunnerEnvironment`<sup>Optional</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment"></a>

```go
RunnerEnvironment *string
```

- *Type:* *string

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#runner_environment GithubOidcIdentityMapping#runner_environment}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow"></a>

```go
Workflow *string
```

- *Type:* *string

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow GithubOidcIdentityMapping#workflow}

---

##### `WorkflowRef`<sup>Optional</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef"></a>

```go
WorkflowRef *string
```

- *Type:* *string

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow_ref GithubOidcIdentityMapping#workflow_ref}

---

### GithubOidcIdentityMappingConfig <a name="GithubOidcIdentityMappingConfig" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

&githuboidcidentitymapping.GithubOidcIdentityMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountIdentifier: *string,
	ClaimMatchers: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier"></a>

```go
AccountIdentifier *string
```

- *Type:* *string

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `ClaimMatchers`<sup>Optional</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers"></a>

```go
ClaimMatchers GithubOidcIdentityMappingClaimMatchers
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIdentityMappingClaimMatchersOutputReference <a name="GithubOidcIdentityMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcidentitymapping"

githuboidcidentitymapping.NewGithubOidcIdentityMappingClaimMatchersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GithubOidcIdentityMappingClaimMatchersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor">ResetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId">ResetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName">ResetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef">ResetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType">ResetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner">ResetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId">ResetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility">ResetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment">ResetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef">ResetWorkflowRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActor` <a name="ResetActor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor"></a>

```go
func ResetActor()
```

##### `ResetActorId` <a name="ResetActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId"></a>

```go
func ResetActorId()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise"></a>

```go
func ResetEnterprise()
```

##### `ResetEnterpriseId` <a name="ResetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```go
func ResetEnterpriseId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetEventName` <a name="ResetEventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName"></a>

```go
func ResetEventName()
```

##### `ResetJobWorkflowRef` <a name="ResetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```go
func ResetJobWorkflowRef()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef"></a>

```go
func ResetRef()
```

##### `ResetRefType` <a name="ResetRefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType"></a>

```go
func ResetRefType()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```go
func ResetRepositoryId()
```

##### `ResetRepositoryOwner` <a name="ResetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```go
func ResetRepositoryOwner()
```

##### `ResetRepositoryOwnerId` <a name="ResetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```go
func ResetRepositoryOwnerId()
```

##### `ResetRepositoryVisibility` <a name="ResetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```go
func ResetRepositoryVisibility()
```

##### `ResetRunnerEnvironment` <a name="ResetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```go
func ResetRunnerEnvironment()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow"></a>

```go
func ResetWorkflow()
```

##### `ResetWorkflowRef` <a name="ResetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```go
func ResetWorkflowRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput">ActorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput">EnterpriseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput">EventNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">JobWorkflowRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput">RefTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">RepositoryOwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput">RepositoryOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">RepositoryVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">RunnerEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput">SubInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput">WorkflowRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor">Actor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise">Enterprise</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId">EnterpriseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName">EventName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType">RefType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner">RepositoryOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub">Sub</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow">Workflow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef">WorkflowRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `ActorInput`<sup>Optional</sup> <a name="ActorInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput"></a>

```go
func ActorInput() *string
```

- *Type:* *string

---

##### `EnterpriseIdInput`<sup>Optional</sup> <a name="EnterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```go
func EnterpriseIdInput() *string
```

- *Type:* *string

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```go
func EnterpriseInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `EventNameInput`<sup>Optional</sup> <a name="EventNameInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```go
func EventNameInput() *string
```

- *Type:* *string

---

##### `JobWorkflowRefInput`<sup>Optional</sup> <a name="JobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```go
func JobWorkflowRefInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RefTypeInput`<sup>Optional</sup> <a name="RefTypeInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```go
func RefTypeInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RepositoryOwnerIdInput`<sup>Optional</sup> <a name="RepositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```go
func RepositoryOwnerIdInput() *string
```

- *Type:* *string

---

##### `RepositoryOwnerInput`<sup>Optional</sup> <a name="RepositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```go
func RepositoryOwnerInput() *string
```

- *Type:* *string

---

##### `RepositoryVisibilityInput`<sup>Optional</sup> <a name="RepositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```go
func RepositoryVisibilityInput() *string
```

- *Type:* *string

---

##### `RunnerEnvironmentInput`<sup>Optional</sup> <a name="RunnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```go
func RunnerEnvironmentInput() *string
```

- *Type:* *string

---

##### `SubInput`<sup>Optional</sup> <a name="SubInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput"></a>

```go
func SubInput() *string
```

- *Type:* *string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput"></a>

```go
func WorkflowInput() *string
```

- *Type:* *string

---

##### `WorkflowRefInput`<sup>Optional</sup> <a name="WorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```go
func WorkflowRefInput() *string
```

- *Type:* *string

---

##### `Actor`<sup>Required</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor"></a>

```go
func Actor() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise"></a>

```go
func Enterprise() *string
```

- *Type:* *string

---

##### `EnterpriseId`<sup>Required</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```go
func EnterpriseId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName"></a>

```go
func EventName() *string
```

- *Type:* *string

---

##### `JobWorkflowRef`<sup>Required</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```go
func JobWorkflowRef() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `RefType`<sup>Required</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType"></a>

```go
func RefType() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `RepositoryOwner`<sup>Required</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```go
func RepositoryOwner() *string
```

- *Type:* *string

---

##### `RepositoryOwnerId`<sup>Required</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```go
func RepositoryOwnerId() *string
```

- *Type:* *string

---

##### `RepositoryVisibility`<sup>Required</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```go
func RepositoryVisibility() *string
```

- *Type:* *string

---

##### `RunnerEnvironment`<sup>Required</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```go
func RunnerEnvironment() *string
```

- *Type:* *string

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub"></a>

```go
func Sub() *string
```

- *Type:* *string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow"></a>

```go
func Workflow() *string
```

- *Type:* *string

---

##### `WorkflowRef`<sup>Required</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef"></a>

```go
func WorkflowRef() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



