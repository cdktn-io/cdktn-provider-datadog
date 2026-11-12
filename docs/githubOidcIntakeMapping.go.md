# `githubOidcIntakeMapping` Submodule <a name="`githubOidcIntakeMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIntakeMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIntakeMapping <a name="GithubOidcIntakeMapping" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping datadog_github_oidc_intake_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

githuboidcintakemapping.NewGithubOidcIntakeMapping(scope Construct, id *string, config GithubOidcIntakeMappingConfig) GithubOidcIntakeMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig">GithubOidcIntakeMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig">GithubOidcIntakeMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers">PutClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetClaimMatchers">ResetClaimMatchers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClaimMatchers` <a name="PutClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers"></a>

```go
func PutClaimMatchers(value GithubOidcIntakeMappingClaimMatchers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

---

##### `ResetClaimMatchers` <a name="ResetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.resetClaimMatchers"></a>

```go
func ResetClaimMatchers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

githuboidcintakemapping.GithubOidcIntakeMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

githuboidcintakemapping.GithubOidcIntakeMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

githuboidcintakemapping.GithubOidcIntakeMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

githuboidcintakemapping.GithubOidcIntakeMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GithubOidcIntakeMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GithubOidcIntakeMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIntakeMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference">GithubOidcIntakeMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchersInput">ClaimMatchersInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClaimMatchers`<sup>Required</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchers"></a>

```go
func ClaimMatchers() GithubOidcIntakeMappingClaimMatchersOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference">GithubOidcIntakeMappingClaimMatchersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ClaimMatchersInput`<sup>Optional</sup> <a name="ClaimMatchersInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.claimMatchersInput"></a>

```go
func ClaimMatchersInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIntakeMappingClaimMatchers <a name="GithubOidcIntakeMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

&githuboidcintakemapping.GithubOidcIntakeMappingClaimMatchers {
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
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.sub">Sub</a></code> | <code>*string</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actor">Actor</a></code> | <code>*string</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actorId">ActorId</a></code> | <code>*string</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterprise">Enterprise</a></code> | <code>*string</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterpriseId">EnterpriseId</a></code> | <code>*string</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.environment">Environment</a></code> | <code>*string</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.eventName">EventName</a></code> | <code>*string</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>*string</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.ref">Ref</a></code> | <code>*string</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.refType">RefType</a></code> | <code>*string</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repository">Repository</a></code> | <code>*string</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwner">RepositoryOwner</a></code> | <code>*string</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>*string</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>*string</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>*string</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflow">Workflow</a></code> | <code>*string</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflowRef">WorkflowRef</a></code> | <code>*string</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.sub"></a>

```go
Sub *string
```

- *Type:* *string

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#sub GithubOidcIntakeMapping#sub}

---

##### `Actor`<sup>Optional</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actor"></a>

```go
Actor *string
```

- *Type:* *string

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor GithubOidcIntakeMapping#actor}

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor_id GithubOidcIntakeMapping#actor_id}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterprise"></a>

```go
Enterprise *string
```

- *Type:* *string

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise GithubOidcIntakeMapping#enterprise}

---

##### `EnterpriseId`<sup>Optional</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.enterpriseId"></a>

```go
EnterpriseId *string
```

- *Type:* *string

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise_id GithubOidcIntakeMapping#enterprise_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#environment GithubOidcIntakeMapping#environment}

---

##### `EventName`<sup>Optional</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.eventName"></a>

```go
EventName *string
```

- *Type:* *string

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#event_name GithubOidcIntakeMapping#event_name}

---

##### `JobWorkflowRef`<sup>Optional</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.jobWorkflowRef"></a>

```go
JobWorkflowRef *string
```

- *Type:* *string

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#job_workflow_ref GithubOidcIntakeMapping#job_workflow_ref}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref GithubOidcIntakeMapping#ref}

---

##### `RefType`<sup>Optional</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.refType"></a>

```go
RefType *string
```

- *Type:* *string

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref_type GithubOidcIntakeMapping#ref_type}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository GithubOidcIntakeMapping#repository}

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_id GithubOidcIntakeMapping#repository_id}

---

##### `RepositoryOwner`<sup>Optional</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwner"></a>

```go
RepositoryOwner *string
```

- *Type:* *string

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner GithubOidcIntakeMapping#repository_owner}

---

##### `RepositoryOwnerId`<sup>Optional</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryOwnerId"></a>

```go
RepositoryOwnerId *string
```

- *Type:* *string

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner_id GithubOidcIntakeMapping#repository_owner_id}

---

##### `RepositoryVisibility`<sup>Optional</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.repositoryVisibility"></a>

```go
RepositoryVisibility *string
```

- *Type:* *string

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_visibility GithubOidcIntakeMapping#repository_visibility}

---

##### `RunnerEnvironment`<sup>Optional</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.runnerEnvironment"></a>

```go
RunnerEnvironment *string
```

- *Type:* *string

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#runner_environment GithubOidcIntakeMapping#runner_environment}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflow"></a>

```go
Workflow *string
```

- *Type:* *string

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow GithubOidcIntakeMapping#workflow}

---

##### `WorkflowRef`<sup>Optional</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers.property.workflowRef"></a>

```go
WorkflowRef *string
```

- *Type:* *string

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow_ref GithubOidcIntakeMapping#workflow_ref}

---

### GithubOidcIntakeMappingConfig <a name="GithubOidcIntakeMappingConfig" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

&githuboidcintakemapping.GithubOidcIntakeMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClaimMatchers: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.claimMatchers">ClaimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClaimMatchers`<sup>Optional</sup> <a name="ClaimMatchers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingConfig.property.claimMatchers"></a>

```go
ClaimMatchers GithubOidcIntakeMappingClaimMatchers
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchers">GithubOidcIntakeMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#claim_matchers GithubOidcIntakeMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIntakeMappingClaimMatchersOutputReference <a name="GithubOidcIntakeMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v17/githuboidcintakemapping"

githuboidcintakemapping.NewGithubOidcIntakeMappingClaimMatchersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GithubOidcIntakeMappingClaimMatchersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActor">ResetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterpriseId">ResetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEventName">ResetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetJobWorkflowRef">ResetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRefType">ResetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwner">ResetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwnerId">ResetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryVisibility">ResetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRunnerEnvironment">ResetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflowRef">ResetWorkflowRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActor` <a name="ResetActor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActor"></a>

```go
func ResetActor()
```

##### `ResetActorId` <a name="ResetActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetActorId"></a>

```go
func ResetActorId()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterprise"></a>

```go
func ResetEnterprise()
```

##### `ResetEnterpriseId` <a name="ResetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```go
func ResetEnterpriseId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetEventName` <a name="ResetEventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetEventName"></a>

```go
func ResetEventName()
```

##### `ResetJobWorkflowRef` <a name="ResetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```go
func ResetJobWorkflowRef()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRef"></a>

```go
func ResetRef()
```

##### `ResetRefType` <a name="ResetRefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRefType"></a>

```go
func ResetRefType()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```go
func ResetRepositoryId()
```

##### `ResetRepositoryOwner` <a name="ResetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```go
func ResetRepositoryOwner()
```

##### `ResetRepositoryOwnerId` <a name="ResetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```go
func ResetRepositoryOwnerId()
```

##### `ResetRepositoryVisibility` <a name="ResetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```go
func ResetRepositoryVisibility()
```

##### `ResetRunnerEnvironment` <a name="ResetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```go
func ResetRunnerEnvironment()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflow"></a>

```go
func ResetWorkflow()
```

##### `ResetWorkflowRef` <a name="ResetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```go
func ResetWorkflowRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorInput">ActorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseIdInput">EnterpriseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventNameInput">EventNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">JobWorkflowRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refTypeInput">RefTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">RepositoryOwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerInput">RepositoryOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">RepositoryVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">RunnerEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.subInput">SubInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRefInput">WorkflowRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actor">Actor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterprise">Enterprise</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseId">EnterpriseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventName">EventName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRef">JobWorkflowRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refType">RefType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwner">RepositoryOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerId">RepositoryOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibility">RepositoryVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironment">RunnerEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.sub">Sub</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflow">Workflow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRef">WorkflowRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `ActorInput`<sup>Optional</sup> <a name="ActorInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorInput"></a>

```go
func ActorInput() *string
```

- *Type:* *string

---

##### `EnterpriseIdInput`<sup>Optional</sup> <a name="EnterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```go
func EnterpriseIdInput() *string
```

- *Type:* *string

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```go
func EnterpriseInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `EventNameInput`<sup>Optional</sup> <a name="EventNameInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```go
func EventNameInput() *string
```

- *Type:* *string

---

##### `JobWorkflowRefInput`<sup>Optional</sup> <a name="JobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```go
func JobWorkflowRefInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RefTypeInput`<sup>Optional</sup> <a name="RefTypeInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```go
func RefTypeInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RepositoryOwnerIdInput`<sup>Optional</sup> <a name="RepositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```go
func RepositoryOwnerIdInput() *string
```

- *Type:* *string

---

##### `RepositoryOwnerInput`<sup>Optional</sup> <a name="RepositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```go
func RepositoryOwnerInput() *string
```

- *Type:* *string

---

##### `RepositoryVisibilityInput`<sup>Optional</sup> <a name="RepositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```go
func RepositoryVisibilityInput() *string
```

- *Type:* *string

---

##### `RunnerEnvironmentInput`<sup>Optional</sup> <a name="RunnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```go
func RunnerEnvironmentInput() *string
```

- *Type:* *string

---

##### `SubInput`<sup>Optional</sup> <a name="SubInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.subInput"></a>

```go
func SubInput() *string
```

- *Type:* *string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowInput"></a>

```go
func WorkflowInput() *string
```

- *Type:* *string

---

##### `WorkflowRefInput`<sup>Optional</sup> <a name="WorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```go
func WorkflowRefInput() *string
```

- *Type:* *string

---

##### `Actor`<sup>Required</sup> <a name="Actor" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actor"></a>

```go
func Actor() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterprise"></a>

```go
func Enterprise() *string
```

- *Type:* *string

---

##### `EnterpriseId`<sup>Required</sup> <a name="EnterpriseId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```go
func EnterpriseId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.eventName"></a>

```go
func EventName() *string
```

- *Type:* *string

---

##### `JobWorkflowRef`<sup>Required</sup> <a name="JobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```go
func JobWorkflowRef() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `RefType`<sup>Required</sup> <a name="RefType" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.refType"></a>

```go
func RefType() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `RepositoryOwner`<sup>Required</sup> <a name="RepositoryOwner" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```go
func RepositoryOwner() *string
```

- *Type:* *string

---

##### `RepositoryOwnerId`<sup>Required</sup> <a name="RepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```go
func RepositoryOwnerId() *string
```

- *Type:* *string

---

##### `RepositoryVisibility`<sup>Required</sup> <a name="RepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```go
func RepositoryVisibility() *string
```

- *Type:* *string

---

##### `RunnerEnvironment`<sup>Required</sup> <a name="RunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```go
func RunnerEnvironment() *string
```

- *Type:* *string

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.sub"></a>

```go
func Sub() *string
```

- *Type:* *string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflow"></a>

```go
func Workflow() *string
```

- *Type:* *string

---

##### `WorkflowRef`<sup>Required</sup> <a name="WorkflowRef" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.workflowRef"></a>

```go
func WorkflowRef() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.githubOidcIntakeMapping.GithubOidcIntakeMappingClaimMatchersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



