# `statusPageMaintenanceTemplate` Submodule <a name="`statusPageMaintenanceTemplate` Submodule" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageMaintenanceTemplate <a name="StatusPageMaintenanceTemplate" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template datadog_status_page_maintenance_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagemaintenancetemplate"

statuspagemaintenancetemplate.NewStatusPageMaintenanceTemplate(scope Construct, id *string, config StatusPageMaintenanceTemplateConfig) StatusPageMaintenanceTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig">StatusPageMaintenanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig">StatusPageMaintenanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription">ResetCompletedDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds">ResetComponentIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription">ResetInProgressDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle">ResetMaintenanceTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription">ResetScheduledDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCompletedDescription` <a name="ResetCompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription"></a>

```go
func ResetCompletedDescription()
```

##### `ResetComponentIds` <a name="ResetComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds"></a>

```go
func ResetComponentIds()
```

##### `ResetInProgressDescription` <a name="ResetInProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription"></a>

```go
func ResetInProgressDescription()
```

##### `ResetMaintenanceTitle` <a name="ResetMaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle"></a>

```go
func ResetMaintenanceTitle()
```

##### `ResetScheduledDescription` <a name="ResetScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription"></a>

```go
func ResetScheduledDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagemaintenancetemplate"

statuspagemaintenancetemplate.StatusPageMaintenanceTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagemaintenancetemplate"

statuspagemaintenancetemplate.StatusPageMaintenanceTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagemaintenancetemplate"

statuspagemaintenancetemplate.StatusPageMaintenanceTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagemaintenancetemplate"

statuspagemaintenancetemplate.StatusPageMaintenanceTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StatusPageMaintenanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StatusPageMaintenanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageMaintenanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput">CompletedDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput">ComponentIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput">InProgressDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput">MaintenanceTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput">PageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput">ScheduledDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription">CompletedDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds">ComponentIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription">InProgressDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle">MaintenanceTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId">PageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription">ScheduledDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `CompletedDescriptionInput`<sup>Optional</sup> <a name="CompletedDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput"></a>

```go
func CompletedDescriptionInput() *string
```

- *Type:* *string

---

##### `ComponentIdsInput`<sup>Optional</sup> <a name="ComponentIdsInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput"></a>

```go
func ComponentIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InProgressDescriptionInput`<sup>Optional</sup> <a name="InProgressDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput"></a>

```go
func InProgressDescriptionInput() *string
```

- *Type:* *string

---

##### `MaintenanceTitleInput`<sup>Optional</sup> <a name="MaintenanceTitleInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput"></a>

```go
func MaintenanceTitleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PageIdInput`<sup>Optional</sup> <a name="PageIdInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput"></a>

```go
func PageIdInput() *string
```

- *Type:* *string

---

##### `ScheduledDescriptionInput`<sup>Optional</sup> <a name="ScheduledDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput"></a>

```go
func ScheduledDescriptionInput() *string
```

- *Type:* *string

---

##### `CompletedDescription`<sup>Required</sup> <a name="CompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription"></a>

```go
func CompletedDescription() *string
```

- *Type:* *string

---

##### `ComponentIds`<sup>Required</sup> <a name="ComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds"></a>

```go
func ComponentIds() *[]*string
```

- *Type:* *[]*string

---

##### `InProgressDescription`<sup>Required</sup> <a name="InProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription"></a>

```go
func InProgressDescription() *string
```

- *Type:* *string

---

##### `MaintenanceTitle`<sup>Required</sup> <a name="MaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle"></a>

```go
func MaintenanceTitle() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId"></a>

```go
func PageId() *string
```

- *Type:* *string

---

##### `ScheduledDescription`<sup>Required</sup> <a name="ScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription"></a>

```go
func ScheduledDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageMaintenanceTemplateConfig <a name="StatusPageMaintenanceTemplateConfig" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagemaintenancetemplate"

&statuspagemaintenancetemplate.StatusPageMaintenanceTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PageId: *string,
	CompletedDescription: *string,
	ComponentIds: *[]*string,
	InProgressDescription: *string,
	MaintenanceTitle: *string,
	ScheduledDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId">PageId</a></code> | <code>*string</code> | The ID of the status page this maintenance template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription">CompletedDescription</a></code> | <code>*string</code> | The pre-filled description shown once the maintenance is completed. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds">ComponentIds</a></code> | <code>*[]*string</code> | The IDs of the components affected by a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription">InProgressDescription</a></code> | <code>*string</code> | The pre-filled description shown while the maintenance is in progress. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle">MaintenanceTitle</a></code> | <code>*string</code> | The title used for a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription">ScheduledDescription</a></code> | <code>*string</code> | The pre-filled description shown while the maintenance is scheduled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#name StatusPageMaintenanceTemplate#name}

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId"></a>

```go
PageId *string
```

- *Type:* *string

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#page_id StatusPageMaintenanceTemplate#page_id}

---

##### `CompletedDescription`<sup>Optional</sup> <a name="CompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription"></a>

```go
CompletedDescription *string
```

- *Type:* *string

The pre-filled description shown once the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#completed_description StatusPageMaintenanceTemplate#completed_description}

---

##### `ComponentIds`<sup>Optional</sup> <a name="ComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds"></a>

```go
ComponentIds *[]*string
```

- *Type:* *[]*string

The IDs of the components affected by a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#component_ids StatusPageMaintenanceTemplate#component_ids}

---

##### `InProgressDescription`<sup>Optional</sup> <a name="InProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription"></a>

```go
InProgressDescription *string
```

- *Type:* *string

The pre-filled description shown while the maintenance is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#in_progress_description StatusPageMaintenanceTemplate#in_progress_description}

---

##### `MaintenanceTitle`<sup>Optional</sup> <a name="MaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle"></a>

```go
MaintenanceTitle *string
```

- *Type:* *string

The title used for a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#maintenance_title StatusPageMaintenanceTemplate#maintenance_title}

---

##### `ScheduledDescription`<sup>Optional</sup> <a name="ScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription"></a>

```go
ScheduledDescription *string
```

- *Type:* *string

The pre-filled description shown while the maintenance is scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#scheduled_description StatusPageMaintenanceTemplate#scheduled_description}

---



