# `statusPage` Submodule <a name="`statusPage` Submodule" id="@cdktn/provider-datadog.statusPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPage <a name="StatusPage" id="@cdktn/provider-datadog.statusPage.StatusPage"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspage"

statuspage.NewStatusPage(scope Construct, id *string, config StatusPageConfig) StatusPage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig">StatusPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig">StatusPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo">ResetCompanyLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage">ResetEmailHeaderImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon">ResetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon">ResetSlackAppIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled">ResetSlackSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled">ResetSubscriptionsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPage.StatusPage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.statusPage.StatusPage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPage.StatusPage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCompanyLogo` <a name="ResetCompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo"></a>

```go
func ResetCompanyLogo()
```

##### `ResetEmailHeaderImage` <a name="ResetEmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage"></a>

```go
func ResetEmailHeaderImage()
```

##### `ResetFavicon` <a name="ResetFavicon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon"></a>

```go
func ResetFavicon()
```

##### `ResetSlackAppIcon` <a name="ResetSlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon"></a>

```go
func ResetSlackAppIcon()
```

##### `ResetSlackSubscriptionsEnabled` <a name="ResetSlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled"></a>

```go
func ResetSlackSubscriptionsEnabled()
```

##### `ResetSubscriptionsEnabled` <a name="ResetSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled"></a>

```go
func ResetSubscriptionsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspage"

statuspage.StatusPage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspage"

statuspage.StatusPage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspage"

statuspage.StatusPage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspage"

statuspage.StatusPage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StatusPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StatusPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StatusPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain">CustomDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled">CustomDomainEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl">PageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput">CompanyLogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput">DomainPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput">EmailHeaderImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput">FaviconInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput">SlackAppIconInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput">SlackSubscriptionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput">SubscriptionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput">VisualizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo">CompanyLogo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix">DomainPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage">EmailHeaderImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.favicon">Favicon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon">SlackAppIcon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled">SlackSubscriptionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType">VisualizationType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.statusPage.StatusPage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPage.StatusPage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPage.StatusPage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPage.StatusPage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain"></a>

```go
func CustomDomain() *string
```

- *Type:* *string

---

##### `CustomDomainEnabled`<sup>Required</sup> <a name="CustomDomainEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled"></a>

```go
func CustomDomainEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPage.StatusPage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `PageUrl`<sup>Required</sup> <a name="PageUrl" id="@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl"></a>

```go
func PageUrl() *string
```

- *Type:* *string

---

##### `CompanyLogoInput`<sup>Optional</sup> <a name="CompanyLogoInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput"></a>

```go
func CompanyLogoInput() *string
```

- *Type:* *string

---

##### `DomainPrefixInput`<sup>Optional</sup> <a name="DomainPrefixInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput"></a>

```go
func DomainPrefixInput() *string
```

- *Type:* *string

---

##### `EmailHeaderImageInput`<sup>Optional</sup> <a name="EmailHeaderImageInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput"></a>

```go
func EmailHeaderImageInput() *string
```

- *Type:* *string

---

##### `FaviconInput`<sup>Optional</sup> <a name="FaviconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput"></a>

```go
func FaviconInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SlackAppIconInput`<sup>Optional</sup> <a name="SlackAppIconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput"></a>

```go
func SlackAppIconInput() *string
```

- *Type:* *string

---

##### `SlackSubscriptionsEnabledInput`<sup>Optional</sup> <a name="SlackSubscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput"></a>

```go
func SlackSubscriptionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionsEnabledInput`<sup>Optional</sup> <a name="SubscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput"></a>

```go
func SubscriptionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VisualizationTypeInput`<sup>Optional</sup> <a name="VisualizationTypeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput"></a>

```go
func VisualizationTypeInput() *string
```

- *Type:* *string

---

##### `CompanyLogo`<sup>Required</sup> <a name="CompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo"></a>

```go
func CompanyLogo() *string
```

- *Type:* *string

---

##### `DomainPrefix`<sup>Required</sup> <a name="DomainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix"></a>

```go
func DomainPrefix() *string
```

- *Type:* *string

---

##### `EmailHeaderImage`<sup>Required</sup> <a name="EmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage"></a>

```go
func EmailHeaderImage() *string
```

- *Type:* *string

---

##### `Favicon`<sup>Required</sup> <a name="Favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.favicon"></a>

```go
func Favicon() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPage.StatusPage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SlackAppIcon`<sup>Required</sup> <a name="SlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon"></a>

```go
func SlackAppIcon() *string
```

- *Type:* *string

---

##### `SlackSubscriptionsEnabled`<sup>Required</sup> <a name="SlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled"></a>

```go
func SlackSubscriptionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionsEnabled`<sup>Required</sup> <a name="SubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled"></a>

```go
func SubscriptionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VisualizationType`<sup>Required</sup> <a name="VisualizationType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType"></a>

```go
func VisualizationType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageConfig <a name="StatusPageConfig" id="@cdktn/provider-datadog.statusPage.StatusPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspage"

&statuspage.StatusPageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainPrefix: *string,
	Name: *string,
	Type: *string,
	VisualizationType: *string,
	CompanyLogo: *string,
	EmailHeaderImage: *string,
	Favicon: *string,
	SlackAppIcon: *string,
	SlackSubscriptionsEnabled: interface{},
	SubscriptionsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix">DomainPrefix</a></code> | <code>*string</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name">Name</a></code> | <code>*string</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type">Type</a></code> | <code>*string</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType">VisualizationType</a></code> | <code>*string</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo">CompanyLogo</a></code> | <code>*string</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage">EmailHeaderImage</a></code> | <code>*string</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon">Favicon</a></code> | <code>*string</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon">SlackAppIcon</a></code> | <code>*string</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled">SlackSubscriptionsEnabled</a></code> | <code>interface{}</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>interface{}</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainPrefix`<sup>Required</sup> <a name="DomainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix"></a>

```go
DomainPrefix *string
```

- *Type:* *string

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `VisualizationType`<sup>Required</sup> <a name="VisualizationType" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType"></a>

```go
VisualizationType *string
```

- *Type:* *string

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `CompanyLogo`<sup>Optional</sup> <a name="CompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo"></a>

```go
CompanyLogo *string
```

- *Type:* *string

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `EmailHeaderImage`<sup>Optional</sup> <a name="EmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage"></a>

```go
EmailHeaderImage *string
```

- *Type:* *string

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `Favicon`<sup>Optional</sup> <a name="Favicon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon"></a>

```go
Favicon *string
```

- *Type:* *string

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `SlackAppIcon`<sup>Optional</sup> <a name="SlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon"></a>

```go
SlackAppIcon *string
```

- *Type:* *string

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `SlackSubscriptionsEnabled`<sup>Optional</sup> <a name="SlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled"></a>

```go
SlackSubscriptionsEnabled interface{}
```

- *Type:* interface{}

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `SubscriptionsEnabled`<sup>Optional</sup> <a name="SubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled"></a>

```go
SubscriptionsEnabled interface{}
```

- *Type:* interface{}

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---



