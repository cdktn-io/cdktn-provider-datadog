# `secureEmbedDashboard` Submodule <a name="`secureEmbedDashboard` Submodule" id="@cdktn/provider-datadog.secureEmbedDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureEmbedDashboard <a name="SecureEmbedDashboard" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.NewSecureEmbedDashboard(scope Construct, id *string, config SecureEmbedDashboardConfig) SecureEmbedDashboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig">SecureEmbedDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig">SecureEmbedDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars">PutSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan">ResetGlobalTimeLiveSpan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable">ResetGlobalTimeSelectable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars">ResetSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity">ResetViewingPreferencesHighDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme">ResetViewingPreferencesTheme</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSelectableTemplateVars` <a name="PutSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars"></a>

```go
func PutSelectableTemplateVars(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGlobalTimeLiveSpan` <a name="ResetGlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan"></a>

```go
func ResetGlobalTimeLiveSpan()
```

##### `ResetGlobalTimeSelectable` <a name="ResetGlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable"></a>

```go
func ResetGlobalTimeSelectable()
```

##### `ResetSelectableTemplateVars` <a name="ResetSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars"></a>

```go
func ResetSelectableTemplateVars()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetViewingPreferencesHighDensity` <a name="ResetViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity"></a>

```go
func ResetViewingPreferencesHighDensity()
```

##### `ResetViewingPreferencesTheme` <a name="ResetViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme"></a>

```go
func ResetViewingPreferencesTheme()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.SecureEmbedDashboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.SecureEmbedDashboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.SecureEmbedDashboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.SecureEmbedDashboard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecureEmbedDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecureEmbedDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecureEmbedDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential">Credential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars">SelectableTemplateVars</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput">GlobalTimeLiveSpanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput">GlobalTimeSelectableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput">SelectableTemplateVarsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput">ViewingPreferencesHighDensityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput">ViewingPreferencesThemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan">GlobalTimeLiveSpan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable">GlobalTimeSelectable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity">ViewingPreferencesHighDensity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme">ViewingPreferencesTheme</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential"></a>

```go
func Credential() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SelectableTemplateVars`<sup>Required</sup> <a name="SelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars"></a>

```go
func SelectableTemplateVars() SecureEmbedDashboardSelectableTemplateVarsList
```

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput"></a>

```go
func DashboardIdInput() *string
```

- *Type:* *string

---

##### `GlobalTimeLiveSpanInput`<sup>Optional</sup> <a name="GlobalTimeLiveSpanInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput"></a>

```go
func GlobalTimeLiveSpanInput() *string
```

- *Type:* *string

---

##### `GlobalTimeSelectableInput`<sup>Optional</sup> <a name="GlobalTimeSelectableInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput"></a>

```go
func GlobalTimeSelectableInput() interface{}
```

- *Type:* interface{}

---

##### `SelectableTemplateVarsInput`<sup>Optional</sup> <a name="SelectableTemplateVarsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput"></a>

```go
func SelectableTemplateVarsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ViewingPreferencesHighDensityInput`<sup>Optional</sup> <a name="ViewingPreferencesHighDensityInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput"></a>

```go
func ViewingPreferencesHighDensityInput() interface{}
```

- *Type:* interface{}

---

##### `ViewingPreferencesThemeInput`<sup>Optional</sup> <a name="ViewingPreferencesThemeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput"></a>

```go
func ViewingPreferencesThemeInput() *string
```

- *Type:* *string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `GlobalTimeLiveSpan`<sup>Required</sup> <a name="GlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan"></a>

```go
func GlobalTimeLiveSpan() *string
```

- *Type:* *string

---

##### `GlobalTimeSelectable`<sup>Required</sup> <a name="GlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable"></a>

```go
func GlobalTimeSelectable() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `ViewingPreferencesHighDensity`<sup>Required</sup> <a name="ViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity"></a>

```go
func ViewingPreferencesHighDensity() interface{}
```

- *Type:* interface{}

---

##### `ViewingPreferencesTheme`<sup>Required</sup> <a name="ViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme"></a>

```go
func ViewingPreferencesTheme() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureEmbedDashboardConfig <a name="SecureEmbedDashboardConfig" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

&secureembeddashboard.SecureEmbedDashboardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DashboardId: *string,
	Title: *string,
	GlobalTimeLiveSpan: *string,
	GlobalTimeSelectable: interface{},
	SelectableTemplateVars: interface{},
	Status: *string,
	ViewingPreferencesHighDensity: interface{},
	ViewingPreferencesTheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId">DashboardId</a></code> | <code>*string</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title">Title</a></code> | <code>*string</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan">GlobalTimeLiveSpan</a></code> | <code>*string</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable">GlobalTimeSelectable</a></code> | <code>interface{}</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars">SelectableTemplateVars</a></code> | <code>interface{}</code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status">Status</a></code> | <code>*string</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity">ViewingPreferencesHighDensity</a></code> | <code>interface{}</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme">ViewingPreferencesTheme</a></code> | <code>*string</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId"></a>

```go
DashboardId *string
```

- *Type:* *string

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `GlobalTimeLiveSpan`<sup>Optional</sup> <a name="GlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan"></a>

```go
GlobalTimeLiveSpan *string
```

- *Type:* *string

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `GlobalTimeSelectable`<sup>Optional</sup> <a name="GlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable"></a>

```go
GlobalTimeSelectable interface{}
```

- *Type:* interface{}

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `SelectableTemplateVars`<sup>Optional</sup> <a name="SelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars"></a>

```go
SelectableTemplateVars interface{}
```

- *Type:* interface{}

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `ViewingPreferencesHighDensity`<sup>Optional</sup> <a name="ViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity"></a>

```go
ViewingPreferencesHighDensity interface{}
```

- *Type:* interface{}

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `ViewingPreferencesTheme`<sup>Optional</sup> <a name="ViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme"></a>

```go
ViewingPreferencesTheme *string
```

- *Type:* *string

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

### SecureEmbedDashboardSelectableTemplateVars <a name="SecureEmbedDashboardSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

&secureembeddashboard.SecureEmbedDashboardSelectableTemplateVars {
	Name: *string,
	DefaultValues: *[]*string,
	Prefix: *string,
	Type: *string,
	VisibleTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name">Name</a></code> | <code>*string</code> | The name of the template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues">DefaultValues</a></code> | <code>*[]*string</code> | The default values for this template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix">Prefix</a></code> | <code>*string</code> | The tag prefix for this template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type">Type</a></code> | <code>*string</code> | The type of the template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags">VisibleTags</a></code> | <code>*[]*string</code> | The visible tag values for this template variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#name SecureEmbedDashboard#name}

---

##### `DefaultValues`<sup>Optional</sup> <a name="DefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues"></a>

```go
DefaultValues *[]*string
```

- *Type:* *[]*string

The default values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#default_values SecureEmbedDashboard#default_values}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The tag prefix for this template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#prefix SecureEmbedDashboard#prefix}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#type SecureEmbedDashboard#type}

---

##### `VisibleTags`<sup>Optional</sup> <a name="VisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags"></a>

```go
VisibleTags *[]*string
```

- *Type:* *[]*string

The visible tag values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/secure_embed_dashboard#visible_tags SecureEmbedDashboard#visible_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureEmbedDashboardSelectableTemplateVarsList <a name="SecureEmbedDashboardSelectableTemplateVarsList" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.NewSecureEmbedDashboardSelectableTemplateVarsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecureEmbedDashboardSelectableTemplateVarsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get"></a>

```go
func Get(index *f64) SecureEmbedDashboardSelectableTemplateVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecureEmbedDashboardSelectableTemplateVarsOutputReference <a name="SecureEmbedDashboardSelectableTemplateVarsOutputReference" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/secureembeddashboard"

secureembeddashboard.NewSecureEmbedDashboardSelectableTemplateVarsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecureEmbedDashboardSelectableTemplateVarsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues">ResetDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags">ResetVisibleTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValues` <a name="ResetDefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues"></a>

```go
func ResetDefaultValues()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetVisibleTags` <a name="ResetVisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags"></a>

```go
func ResetVisibleTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput">DefaultValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput">VisibleTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues">DefaultValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags">VisibleTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValuesInput`<sup>Optional</sup> <a name="DefaultValuesInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput"></a>

```go
func DefaultValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VisibleTagsInput`<sup>Optional</sup> <a name="VisibleTagsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput"></a>

```go
func VisibleTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValues`<sup>Required</sup> <a name="DefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues"></a>

```go
func DefaultValues() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VisibleTags`<sup>Required</sup> <a name="VisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags"></a>

```go
func VisibleTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



